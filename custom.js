// Function to get URL parameters
function getScriptParameter(name) {
    const scripts = document.getElementsByTagName('script');
    const currentScript = scripts[scripts.length - 1]; // Gets the last loaded script
    const scriptUrl = currentScript.src;
    const urlParams = new URLSearchParams(scriptUrl.split('?')[1]);
    return urlParams.get(name) || '';
}

// Create a function to watch for elements and inject the WhatsApp button
function watchAndInject() {
    // Get phone number from URL parameter
    const phoneNumber = getScriptParameter('phone');
    
    // Only proceed if phone number is provided
    if (!phoneNumber) return;

    // Create a mutation observer to watch for DOM changes
    const observer = new MutationObserver((mutations, observer) => {
        const paymentContainer = document.querySelector(".product-form__buttons");
        const productTitle = document.querySelector('.product__title h1');
        
        // If we found our target elements, inject the button
        if (paymentContainer && productTitle && !document.querySelector('.whatsapp-order-button')) {
            const productName = productTitle.textContent.trim();
            
            const whatsappButton = document.createElement('div');
            whatsappButton.className = 'whatsapp-order-button';
            whatsappButton.innerHTML = `
                <a href="https://api.whatsapp.com/send?phone=${phoneNumber}&text=I'm interested in the product: ${encodeURIComponent(productName)}"
                   target="_blank"
                   style="display: block; text-decoration: none; margin-top: 10px;">
                    <div style="
                        background-color: #25D366;
                        color: white;
                        padding: 10px;
                        text-align: center;
                        border-radius: 4px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                    ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                        Order on WhatsApp
                    </div>
                </a>
            `;
            
            paymentContainer.appendChild(whatsappButton);
        }
    });

    // Start observing the entire document with the configured parameters
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Start watching immediately
watchAndInject();