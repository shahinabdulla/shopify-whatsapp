document.addEventListener("DOMContentLoaded", function() {
    const paymentContainer = document.querySelector(".product-form__buttons");
    const productTitle = document.querySelector('.product__title h1');
    if (paymentContainer) {
        const whatsappButton = document.createElement("a"),
            whatsappButtonHTML = `<a style="margin-top:10px;" href="https://api.whatsapp.com/send?phone=+97470574780&amp;text=${`I'm interested in the product: ${encodeURIComponent(productTitle.textContent.trim())}`}" target="_blank" rel="noopener" aria-describedby="a11y-new-window-message" aco-visited="true"><div class="order_whatsapp" style="padding: 9px;text-align: center; background-color: #1EA651;height:47px;color:white;"><img src="https://cdn.shopify.com/s/files/1/0073/2522/0979/files/
whatsapp-icon.png?v=1615793565" width="25px" style="vertical-align:middle;"> Order by <span style="font-weight: bold;">WhatsApp</span>
 </div>
 </a>`;
        paymentContainer.firstElementChild ? paymentContainer.insertBefore(new DOMParser().parseFromString(whatsappButtonHTML, "text/html").body.firstChild, paymentContainer.firstElementChild.nextSibling) : paymentContainer.insertAdjacentHTML("beforeend", whatsappButtonHTML)
    }
});