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
    function addToCart(id, qty = 1) {
        const product = products.find(p => p.id === id);
        if (!product) return;

        const exist = cart.find(item => item.id === id);

        if (exist) {
            exist.qty += qty;
        } else {
            cart.push({
                ...product,
                qty
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        openAddModal();
    }

    function openAddModal(){
        document.getElementById("add-modal").style.display = "block";
        document.querySelector(".modal-overlay").style.display = "block";
    }

    function continueShopping(){
        closeModal();
    }

    function openCart(){
        closeModal();
        sideCart.style.left = "0";
    }

    function checkout(){
        closeModal();
        openSignupOrCheckout();
    }

    function closeModal(){
        document.getElementById("add-modal").style.display = "none";
        document.querySelector(".modal-overlay").style.display = "none";
    }


    function openSignupOrCheckout(){
        const user = JSON.parse(localStorage.getItem("user"));

        if(user){
            signupModal.style.display = "block";
            modalOverlay.style.display = "block";
            fillForm(user);
        }else{
            signupModal.style.display = "block";
            modalOverlay.style.display = "block";
        }
    }
    function fillForm(user){
        signupForm.firstName.value = user.firstName;
        signupForm.lastName.value = user.lastName;
        signupForm.email.value = user.email;
        signupForm.phone.value = user.phone;
    }
    const signupForm = document.getElementById("signup-form");
    const signupModal = document.getElementById("signup-modal");
    const modalOverlay = document.querySelector(".modal-overlay");

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const user = {
            firstName: signupForm.firstName.value,
            lastName: signupForm.lastName.value,
            email: signupForm.email.value,
            phone: signupForm.phone.value
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("ثبت نام با موفقیت انجام شد!");
        // signupModal.style.display = "none";
        // modalOverlay.style.display = "none";
        closeSingup();
    });

// -------- Sidebar cart rendering and sync --------
function getCart(){
    try{ return JSON.parse(localStorage.getItem('cart')) || []; }catch(e){ return []; }
}

function saveCart(cart){
    localStorage.setItem('cart', JSON.stringify(cart));
}

function parsePrice(str){ return Number(String(str).replace(/[^\d]/g,'')) || 0; }
function formatPrice(n){ return n.toLocaleString('fa-IR') + ' تومان'; }

function renderSideCart(){
    const content = document.querySelector('.side-cart .cart-content');
    const cartMenuText = document.querySelector('.cart-menu p');
    if(!content) return;
    const cart = getCart();
    if(cart.length === 0){
        content.innerHTML = '<p>سبد خرید شما خالی است.</p>';
        if(cartMenuText) cartMenuText.textContent = 'سبد خرید شما خالی است.';
        return;
    }

    let total = 0;
    content.innerHTML = cart.map(item => {
        const price = parsePrice(item.price);
        total += price * Number(item.qty);
        return `
            <div class="cart-row" data-id="${item.id}">
                <img src="${(item.colors && item.colors[0] && item.colors[0].img) ? item.colors[0].img : (item.img||'') }" alt="" />
                <div class="cart-info">
                    <div class="cart-title">${item.title}</div>
                    <div class="cart-price">${item.price} × <span class="cart-qty">${item.qty}</span></div>
                </div>
                <div class="cart-actions">
                    <button class="cart-dec">−</button>
                    <button class="cart-inc">+</button>
                    <button class="cart-remove">حذف</button>
                </div>
            </div>
        `;
    }).join('') + `
        <div class="cart-summary">جمع کل: <strong>${formatPrice(total)}</strong></div>
        <div style="margin-top:10px;text-align:center;"><button class="cart-checkout">تسویه حساب</button></div>
    `;

    if(cartMenuText) cartMenuText.textContent = `سبد خرید (${cart.reduce((s,i)=>s+Number(i.qty),0)})`;
}

// delegate cart actions
document.addEventListener('click', (e) => {
    const target = e.target;
    if(target.classList.contains('cart-remove')){
        const row = target.closest('.cart-row');
        const id = Number(row.dataset.id);
        let cart = getCart();
        cart = cart.filter(i => i.id !== id);
        saveCart(cart);
        renderSideCart();
    }
    if(target.classList.contains('cart-checkout')){
        // go to checkout page
        window.location.href = 'checkout.html';
    }
    if(target.classList.contains('cart-inc') || target.classList.contains('cart-dec')){
        const row = target.closest('.cart-row');
        const id = Number(row.dataset.id);
        const cart = getCart();
        const it = cart.find(i => i.id === id);
        if(!it) return;
        if(target.classList.contains('cart-inc')) it.qty = Number(it.qty) + 1;
        if(target.classList.contains('cart-dec')) it.qty = Math.max(1, Number(it.qty) - 1);
        saveCart(cart);
        renderSideCart();
    }
});

// react to storage changes from other pages
window.addEventListener('storage', (e) => {
    if(e.key === 'cart') renderSideCart();
});

// ensure sidebar cart is rendered on load
document.addEventListener('DOMContentLoaded', () => {
    renderSideCart();
});
function addToCart(productId){
    console.log("added:", productId);
}
