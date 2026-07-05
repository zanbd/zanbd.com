// Welcome Message
window.onload = function () {
    console.log("Welcome to ZAN BD");
};

// Search Products
function searchProduct() {
    let input = document.getElementById("search").value.toLowerCase();
    let products = document.getElementsByClassName("card");

    for (let i = 0; i < products.length; i++) {
        let title = products[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        if (title.indexOf(input) > -1) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}

// Add To Cart
let cart = 0;

function addToCart() {
    cart++;
    document.getElementById("cartCount").innerHTML = cart;
    alert("✅ Product Added To Cart");
}

// WhatsApp Order
function orderNow(product) {

    let number = "8801328925282";

    let text = "Hello ZAN BD, I want to order : " + product;

    window.open("https://wa.me/" + number + "?text=" + encodeURIComponent(text))