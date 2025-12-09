
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("items");

function displayCart() {
    container.innerHTML = ""; // Clear previous items
    let total = 0;

    cart.forEach((item, index) => {
        let div = document.createElement("div");
        div.className = "item";

        // Add remove button
        div.innerHTML = `<b>${item.name}</b> — $${item.price} 
                        <button class="removeBtn" data-index="${index}">Remove</button>`;

        container.appendChild(div);
        total += item.price;
    });

    document.getElementById("total").innerText = total;

    // Add click event for remove buttons
    const removeBtns = document.querySelectorAll(".removeBtn");
    removeBtns.forEach(btn => {
        btn.addEventListener("click", function(e) {
            const idx = parseInt(btn.getAttribute("data-index"));
            cart.splice(idx, 1); // Remove from array
            localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
            displayCart(); // Refresh cart display
        });
    });
}

// Initial display
displayCart();


