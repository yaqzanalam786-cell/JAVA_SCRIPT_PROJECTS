// const buy = document.querySelectorAll(".shop")
// const carted = document.getElementById("cart")
// buy.forEach((cart)=>{
//     cart.addEventListener("click",function(e){
//         cart.innerHTML = "Added to Cart"
//         cart.style.backgroundColor = "brown" 
//         carted.style.color = "Blue"
//         carted.style.fontSize = "20px"
         
//     })
// })

const buy = document.querySelectorAll(".shop");
const carted = document.getElementById("cart");

buy.forEach((cartBtn) => {
    cartBtn.addEventListener("click", function(e) {
        const parent = cartBtn.parentElement;

        // Product name
        const nameEl = parent.querySelector(".heading");
        const name = nameEl ? nameEl.innerText : "Unknown Product";

        // Product price
        const priceEl = parent.querySelector(".price");
        let price = 0;
        if (priceEl) {
            price = parseFloat(priceEl.innerText.replace("$","")) || 0;
        }

        // Save in localStorage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ name: name, price: price });
        localStorage.setItem("cart", JSON.stringify(cart));

        // UI changes
        cartBtn.innerHTML = "Added to Cart";
        cartBtn.style.backgroundColor = "brown";
        carted.style.color = "blue";
        carted.style.fontSize = "20px";

        // Optional: disable button to avoid multiple clicks
        cartBtn.disabled = true;

        console.log("Added to cart:", name, price);
        console.log("Current cart:", cart);
    });
});
