// دیتابیس نمونه محصولات
if (typeof products === 'undefined') {
    var products = [
    {
        id: 40641,
        title: "بامبر فوتر",
        price: "1,198,000 تومان",
        desc:  `بامبر جکت دخترانه بسیار شیک پینترستی مناسب فصل پاییز 
        این محصول به صورت فری سایز طراحی شده و برای خانم هایی  که بین سایز 36 تا 42 هستند کاملا مناسب است 
        دور سینه با اندازه ی دور کمر در حالت کشسانی یکسان میباشد
        دارای آستر داخلی برای راحتی بیشتر
        طزاحی شیک و مدرن با رنگ بندی متنوع
        جنس با کیفیت از کرپ(لطافت,مقاومت,راحتی)
        مناسب برای استفاده روزمره و نیمه رسمی
        قد محصول 55 cm است`,
        colors: [
            {img: "lili_shop/40641.jpg",name:"استخونی"},
        ]
    },

    {
        id: 40642,
        title: "بافت پاپیونی ",
        price: "898,000 تومان",
        desc:  ` بافت دخترانه پاپیونی انتخابی فوق العاده برای خانم های که به دنبال استایلی لطیف,دخترانه  و متفاوت هستند.طراحی خاص این بافت با جزییات پاپیونی,جلوه ای ظریف و رمانتیک به  استایل شما می بخشد جنس بافت نرو ولطیف و گرم قد بافت 50 cm سایز بافت فری سایز است مناسب برای 36 تا 44. `,
           selectbox:"سفید",
        colors: [
            {img: "lili_shop/40642.jpg",name:"کرم"},
            
        ]
    },
    {
        id:40643,
        title:"کت فوتر",
        price:"1.198.000",
        desc: `کت فوتر دخترانه مناسب فصل پاییز و زمستان
        جنس: فوتر وارداتی کیفیت بالا,آسترد
        رنگ:خاکی
        قد : 57cm
        سایز1 : مناسب 36 تا 40
        سایز2 : مناسب 40 تا 48 `,
        colors:[
            {img:"lili_shop/40643.jpg",name:"خاکی"}
        ]
    },

    {
        id:40644,
        title:"ست دورس شکلاتی",
        price:"648.000",
        desc:`ست دورس و جاگر بیسیک مناسب فصل پاییز و زمستان 
        قد دورس 60cm
        فری سایز مناسب 36 تا 44`,
        colors:[
            {img:"lili_shop/40644.jpg" , name:"قهوه ای شکلاتی"}
        ]
    },
    {
        id:40645,
        title:"ست هودی و شلوار",
        price:"848.000",
        desc:`ست هودی شلوار سفید بیسیک
        جنس  پنبه تو کرکی
        فری سایز مناسب 36 تا 45
        مناسب فصل پاییز و زمستان`,
        colors:[
            {img:"lili_shop/40645.jpg",name:"سفید"}
        ]
    },
    {
        id:40646,
        title:"ترنچ کت",
        price:"998.000",
        desc:`ترنچ کت ضدآب آستردار
        در رنگ بندی متنوع مناسب فصل بهار پاییز و زمستان
        سایز:فری سایز مناسب 36 تا 42
        قد محصول:50cm `,
        colors:[
            {img:"lili_shop/40646.jpg",name:"سبز تیره" ,},
            {img:"lili_shop/40646-2.jpg",name:"کرمی"},
            {img:"lili_shop/40646-3.jpg",name:"استخونی"},
            {img:"lili_shop/40646-4.jpg"},
            {img:"lili_shop/40646-5.jpg"}
        ]
    },
    {
        id:40647,
        title:"ترنچ کت",
        price:"1.098.000",
        desc:`ترنچ کت بلند آستردار و ضدآب
        مناسب فصل پاییز و زمستان و بهار
        در دو رنک مشکی و کرم 
        قد محصول 78cm
        فری سایز `,
        colors:[
            {img:"lili_shop/40647.jpg"},
            {img:"lili_shop/40647-2.jpg"}
        ]
    },
    {
        id:40648,
        title:"کراپ سویشرت ",
        price:"898.000",
        desc:`کراپ سویشرت زیبای دخترانه
          مناسب برای فصل پاییز و زمستان
          استیلی خاص برای خانم های اسپورت پوش
          فری سایز مناسب 36تا 44
          قد سویشرت 55cm
         درسه رنگ بندی خاص`,
        colors:[
            {img:"lili_shop/40648.jpg"},
            {img:"lili_shop/40648-2.jpg"},
            {img:"lili_shop/40648-3.jpg"}
        ]
    },
    {
        id:40649,
        title:"ست باف و کلاه",
        price:"1.398.000",
        desc:`ست بافت و کلاه پینترستی دخترانه
        در دو رنگ بندی ترند سال صورتی و قهوه ای شکلاتی 
        مناسب فصل پاییز و زمستان 
        قد محصول 60cm
        فری سایز می باشد`,
        colors:[
            {img:"lili_shop/40649.jpg"},
            {img:"lili_shop/40649-2.jpg"}
        ]
    },
    {
        id:40650,
        title:"هودی کراپ",
        price:"1.398.000",
        desc:`هودی کراپ زیبای دخترانه
        جنس سنگشور
        قد 58cm
        فری سایز`,
        colors:[
            {img:"lili_shop/40650.jpg"}
        ]
    },
    {
        id:40651,
        title:"پافر پفکی",
        price:"948.000",
        desc:`پافر پفکی با ظاهری ساده مناسب 
        برای روزهای سرد سال
        جنس پلی استر و ضدآب
        قد محصول50cm `,
        colors:[
            {img:"lili_shop/40651.jpg"},
            {img:"lili_shop/40651-2.jpg"},
            {img:"lili_shop/40651-3.jpg"}
        ]
    },
    {
        id:40652,
        title:"کت فوتر",
        price:"1.248.000",
        desc:`کت فوتر کمرکش انتخابی خاص 
        برای خانم های شیک پوش
        قد محصول 53cm
        فری سایز `,
        colors:[
            {img:"lili_shop/40652.jpg"},
            {img:"lili_shop/40652-2.jpg"}
        ]
    },
    {
        id:40653,
        title:"کت فوتر ZARA",
        price:"2.398.000",
        desc:`کت فوتر وارداتی ZARA  مناسب روزهای سرد زمستانی 
        این کت فوق العاده گرم و لطیف است استایلی مناسب 
         برای استفاده روزمره
         فری سایز
         قد محصول 60cm`,
        colors:[
            {img:"lili_shop/40653.jpg"}
        ]
    },
    {
        id:40654,
        title:"وست بوفالو",
        price:"1.998.000",
        desc:`وست بوفالو داخل این محصول خز کار شده 
        استایلی شیک برای خانم های خوش سلیقه
        قد کار 50cm
        فری سایز`,
        colors:[
            {img:"lili_shop/40654.jpg"},
            {img:"lili_shop/40654-2.jpg"},
            {img:"lili_shop/40654-3.jpg"}
        ]
    },
    {
        id:40655,
        title:"ست سویشرت و شلوار بگ",
        price:"1.698.000",
        desc:`ست وارداتی  بسیار با کیفیت
        بسیار گرم و لطیف مناسب فصل پاییز و زمستان
         فری سایز`,
        colors:[
            {img:"lili_shop/40655.jpg"}
        ]
    },
    {
        id:40656,
        title:"کت فوتر تندیس",
        price:"1.498.000",
        desc:`کت تندیس بسیار شیک و با کیفیت 
        برای استفاده روزمره خانم های شیک پوش
        فری سایز
        قد محصول 68cm`,
        colors:[
            {img:"lili_shop/40656.jpg"}
        ]
    },
    {
        id:40657,
        title:"بافت وارداتی ZARA",
        price:"1.548.000",
        desc: `بافت ZARA این بافت پینترستی
        مناسب فصل پاییز و زمستان
        فری سایز
        قد محصول 68cm `,
        colors:[
            {img:"lili_shop/40657.jpg"}
        ]
    },
    {
        id:40658,
        title:"پافر پفکی لیندا",
        price:"798.000",
        desc:`پافر لیندا محصولی گرم جنس کار پشم شیشه
        فری سایز
        قد کار 68cm`,
        colors:[
            {img:"lili_shop/40658.jpg"}
        ]
    },
    {
        id:40659,
        title:"کت بوفالو",
        price:"2.898.000",
        desc:`کت بوفالو با پینترستی ترین رنگبندی سال
        انتخابی مناسب برای دختران خوش سلیقه 
        قد محصول 50cm
        سایز M,L,XL,XXL`,
        colors:[
            {img:"lili_shop/40659.jpg"}
        ]
    },
    ];
}


// گرفتن ID از URL
const urlParams = new URLSearchParams(window.location.search);
let productId = Number(urlParams.get("id"));

const product = products.find(p => p.id === productId);


// نمایش اطلاعات در صفحه
if(product){
    document.getElementById("title").textContent = product.title;
    document.getElementById("price").textContent = product.price;
    document.getElementById("desc").innerHTML = product.desc.replace(/\n/g, "<br>");
    document.getElementById("addToCartBtn").addEventListener("click", () => {
        const qty = Number(document.getElementById("qty").value);
        addToCart(product.id, qty);
    });

    const mainImage = document.getElementById("mainImage");
    mainImage.src = product.colors[0].img;

    const colorsDiv = document.getElementById("colors");

   const selectbox = document.getElementById("selectbox");

product.colors.forEach((c, index) => {
  const opt = document.createElement("option");
  opt.value = index;
  opt.textContent = c.name;
  selectbox.appendChild(opt);
});

    
}
const qtyInput = document.getElementById("qty");
document.getElementById("plus").onclick = () => qtyInput.value++;
document.getElementById("minus").onclick = () => {
    if (qtyInput.value > 1) qtyInput.value--;
};

// --- Shopping cart logic (localStorage) ---
function getCart(){
    try{ return JSON.parse(localStorage.getItem('cart')||'[]'); }catch(e){ return []; }
}
function saveCart(cart){ localStorage.setItem('cart', JSON.stringify(cart)); }
function parsePrice(str){ const n = Number(String(str).replace(/[^\d]/g,'')); return isNaN(n)?0:n; }
function formatPrice(n){ return n.toLocaleString('fa-IR') + ' تومان'; }

function renderCart(){
    const items = getCart();
    const container = document.getElementById('cartItems');
    if(!container) return;
    container.innerHTML = '';
    let total = 0;
    items.forEach(it => {
        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <img src="${it.img}" alt="">
            <div class="meta">
                <div class="title">${it.title}</div>
                <div class="price">${it.price} × ${it.qty}</div>
            </div>
            <button class="remove" data-id="${it.id}">حذف</button>
        `;
        container.appendChild(row);
        total += parsePrice(it.price) * Number(it.qty);
    });
    const totalEl = document.getElementById('cartTotal');
    if(totalEl) totalEl.textContent = formatPrice(total);

    container.querySelectorAll('.remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = Number(e.currentTarget.dataset.id);
            removeFromCart(id);
        });
    });

    updateCartCount();
}

function updateCartCount(){
    const cntEl = document.getElementById('cartCount');
    if(!cntEl) return;
    const items = getCart();
    const count = items.reduce((s,i)=>s + Number(i.qty), 0);
    cntEl.textContent = count;
}

function addToCart(productId, qty=1){
    const p = products.find(x => x.id === productId);
    if(!p) return;
    const cart = getCart();
    const existing = cart.find(i => i.id === productId);
    if(existing){ existing.qty = Number(existing.qty) + Number(qty); }
    else{ cart.push({ id: p.id, title: p.title, price: p.price, img: (p.colors && p.colors[0]) ? p.colors[0].img : '', qty: Number(qty) }); }
    saveCart(cart);
    renderCart();
    openCart();
}

function removeFromCart(id){
    let cart = getCart();
    cart = cart.filter(i => i.id !== id);
    saveCart(cart);
    renderCart();
}

function openCart(){ const modal = document.getElementById('cartModal'); if(modal) modal.classList.remove('hidden'); }
function closeCart(){ const modal = document.getElementById('cartModal'); if(modal) modal.classList.add('hidden'); }

// Attach cart button handlers and initialize
document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.getElementById('cartButton'); if(cartBtn) cartBtn.addEventListener('click', openCart);
    const closeBtn = document.getElementById('closeCart'); if(closeBtn) closeBtn.addEventListener('click', closeCart);
    const checkout = document.getElementById('checkoutBtn'); if(checkout) checkout.addEventListener('click', () => { alert('فرآیند تسویه در این دمو فعال نیست.'); });
    renderCart();
});



