document.addEventListener("DOMContentLoaded", function() {
    // Wait a bit to ensure Shopify's elements are loaded
    setTimeout(() => {
        console.log("WhatsApp script started"); // Debug log

        // Get the container and product title
        const paymentContainer = document.querySelector(".product-form__buttons");
        const productTitle = document.querySelector('.product__title h1');

        console.log("Container found:", !!paymentContainer); // Debug log
        console.log("Product title found:", !!productTitle); // Debug log

        if (paymentContainer && productTitle) {
            const productName = productTitle.textContent.trim();
            const messageText = `I'm interested in the product: ${productName}`;
            
            const whatsappButtonHTML = `
                <a 
                    style="display: block; margin-top: 10px; text-decoration: none;" 
                    href="https://api.whatsapp.com/send?phone=97470574780&text=${encodeURIComponent(messageText)}" 
                    target="_blank" 
                    rel="noopener"
                >
                    <div class="order_whatsapp" 
                        style="
                            padding: 9px;
                            text-align: center; 
                            background-color: #1EA651;
                            height: 47px;
                            color: white;
                            border-radius: 4px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 8px;
                        "
                    >
                        <img 
                            src="https://cdn.jsdelivr.net/gh/shahinabdulla/shopify-whatsapp@latest/whatsapp-icon.png" 
                            width="25" 
                            alt="WhatsApp"
                            style="vertical-align: middle;"
                        >
                        Order by <strong>WhatsApp</strong>
                    </div>
                </a>
            `;

            // Insert the button
            if (paymentContainer.firstElementChild) {
                paymentContainer.insertBefore(
                    new DOMParser().parseFromString(whatsappButtonHTML, "text/html").body.firstChild, 
                    paymentContainer.firstElementChild.nextSibling
                );
            } else {
                paymentContainer.insertAdjacentHTML("beforeend", whatsappButtonHTML);
            }

            console.log("WhatsApp button added"); // Debug log
        } else {
            console.log("Required elements not found"); // Debug log
        }
    }, 1000); // Wait 1 second for elements to load
});