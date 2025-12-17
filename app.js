
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");


searchInput.addEventListener("input", () => {
    const value = searchInput.value.trim();

    if (!value) {
        searchResults.style.display = "none";
        return;
    }

    const filtered = products.filter(p =>
        p.title.includes(value) || p.id.toString().includes(value)
    );

    searchResults.innerHTML = filtered.length
        ? filtered.map(p => `
            <div onclick="location.href='product.html?id=${p.id}'">
                ${p.title} - ${p.id}
            </div>
        `).join("")
        : "<div>محصولی یافت نشد</div>";

    searchResults.style.display = "block";
});
searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const value = searchInput.value.trim();
        if (!value) return;

        const result = products.find(p =>
            p.title.includes(value) || p.id.toString() === value
        );

        if (result) {
            location.href = `product.html?id=${result.id}`;
        }
    }
});
document.querySelectorAll(".menu-list li[data-category]").forEach(item => {
    item.addEventListener("click", () => {
        const cat = item.dataset.category;

        const filtered = products.filter(p =>
            p.title.includes(cat)
        );

        showProducts(filtered);
    
        
    });
});
function showProducts(list) {
    const container = document.querySelector(".products");
    container.innerHTML = "";

    list.forEach(p => {
        container.innerHTML += `
            <div class="product-card" onclick="location.href='product.html?id=${p.id}'">
                <img src="${p.colors[0].img}">
                <h3>${p.title}</h3>
                <p class="price">${p.price}</p>
                <button onclick="event.stopPropagation(); addToCart(${p.id})">افزودن به سبد خرید</button>
            </div>
        `;
    });
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("به سبد خرید اضافه شد ✅");
}
