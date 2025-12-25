// checkout.js — render cart, allow qty changes and placing order

function getCart(){
    try{ return JSON.parse(localStorage.getItem('cart')) || []; }catch(e){ return []; }
}
function saveCart(cart){ localStorage.setItem('cart', JSON.stringify(cart)); window.dispatchEvent(new Event('storage')); }
function parsePrice(str){ return Number(String(str).replace(/[^\d]/g,'')) || 0; }
function formatPrice(n){ return n.toLocaleString('fa-IR') + ' تومان'; }

function renderCheckout(){
    const list = getCart();
    const container = document.getElementById('checkoutList');
    const summary = document.getElementById('checkoutSummary');
    if(!container || !summary) return;

    if(list.length === 0){
        container.innerHTML = '<p>سبد خرید خالی است.</p>';
        summary.innerHTML = '';
        return;
    }

    let total = 0;
    container.innerHTML = list.map(item => {
        const price = parsePrice(item.price);
        total += price * Number(item.qty);
        return `
            <div class="cart-row" data-id="${item.id}" style="margin-bottom:10px;">
                <img src="${(item.colors && item.colors[0] && item.colors[0].img) ? item.colors[0].img : (item.img||'')}" style="width:80px;height:80px;object-fit:cover;border-radius:8px;margin-left:10px;" />
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
    }).join('');

    summary.innerHTML = `<div class="cart-summary">جمع کل: <strong>${formatPrice(total)}</strong></div>`;

    // attach handlers
    container.querySelectorAll('.cart-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = Number(e.currentTarget.closest('.cart-row').dataset.id);
            let c = getCart(); c = c.filter(i => i.id !== id); saveCart(c); renderCheckout();
        });
    });
    container.querySelectorAll('.cart-inc').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = Number(e.currentTarget.closest('.cart-row').dataset.id);
            const c = getCart(); const it = c.find(i=>i.id===id); if(!it) return; it.qty = Number(it.qty)+1; saveCart(c); renderCheckout();
        });
    });
    container.querySelectorAll('.cart-dec').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = Number(e.currentTarget.closest('.cart-row').dataset.id);
            const c = getCart(); const it = c.find(i=>i.id===id); if(!it) return; it.qty = Math.max(1, Number(it.qty)-1); saveCart(c); renderCheckout();
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCheckout();
    document.getElementById('placeOrderBtn').addEventListener('click', () => {
        const cart = getCart();
        if(cart.length === 0){ alert('سبد خرید خالی است'); return; }
        // simple demo: save order and clear cart
        const orders = JSON.parse(localStorage.getItem('orders')||'[]');
        const order = { id: Date.now().toString(), items: cart, total: cart.reduce((s,i)=>s+parsePrice(i.price)*Number(i.qty),0), date: new Date().toISOString() };
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
        localStorage.removeItem('cart');
        alert('سفارش ثبت شد! شماره سفارش: ' + order.id);
        renderCheckout();
        // navigate back to main page
        setTimeout(()=> location.href = 'index.html', 700);
    });
});

// react to external changes
window.addEventListener('storage', (e)=>{ if(e.key === 'cart') renderCheckout(); });
