const items=[
{name:"Classic Smashburger",cat:"burger",price:9.99,img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",desc:"Certified Angus Beef, American cheese, lettuce, tomato."},
{name:"Double Smashburger",cat:"burger",price:12.99,img:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=600",desc:"Double smashed, double cheese, smash sauce."},
{name:"Bacon Smashburger",cat:"burger",price:11.99,img:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600",desc:"Applewood bacon, cheddar, crispy onions."},
{name:"Black Bean Burger",cat:"burger",price:10.99,img:"https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600",desc:"Plant-based, pepper jack, avocado."},
{name:"Crispy Chicken",cat:"chicken",price:10.49,img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600",desc:"Crispy chicken, pickles, mayo."},
{name:"Grilled Chicken",cat:"chicken",price:9.49,img:"https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600",desc:"Grilled, lettuce, tomato, ranch."},
{name:"Smash Fries",cat:"sides",price:4.99,img:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600",desc:"Crispy golden fries, smash seasoning."},
{name:"Onion Rings",cat:"sides",price:5.49,img:"https://images.unsplash.com/photo-1639024471283-03518883512d?w=600",desc:"Beer-battered, crispy."},
{name:"Vanilla Shake",cat:"shakes",price:5.99,img:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600",desc:"Hand-spun, whipped cream."},
{name:"Chocolate Shake",cat:"shakes",price:5.99,img:"https://images.unsplash.com/photo-1577805947697-89e18249d767?w=600",desc:"Rich chocolate, hand-spun."},
{name:"Salad",cat:"sides",price:7.99,img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",desc:"Fresh greens, cucumber, tomato."},
{name:"Kids Meal",cat:"sides",price:6.99,img:"https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600",desc:"Mini burger + fries + drink."}
];
let cart=[];
const grid=document.getElementById('grid');
function render(f='all'){
  grid.innerHTML=items.filter(i=>f==='all'||i.cat===f).map(it=>`
  <div class="item"><img src="${it.img}"><div><h3>${it.name}</h3><p>${it.desc}</p><span class="price">$${it.price}</span><button class="add" onclick="addItem(${items.indexOf(it)})">ADD TO ORDER +</button></div></div>`).join('');
}
render();
document.querySelectorAll('#filters button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('#filters button').forEach(x=>x.classList.remove('active'));
  b.classList.add('active'); render(b.dataset.f);
});
window.addItem=(i)=>{cart.push(items[i]);update();openCart();};
function update(){
  document.getElementById('cartCount').textContent=cart.length;
  let t=0;
  document.getElementById('cartItems').innerHTML=cart.length?cart.map((c,i)=>{t+=c.price;return `<p><span>${c.name} - $${c.price}</span><button onclick="rem(${i})">✕</button></p>`}).join(''):'Cart is empty';
  document.getElementById('cartTotal').textContent='$'+t.toFixed(2);
}
window.rem=(i)=>{cart.splice(i,1);update();};
const drawer=document.getElementById('cartDrawer'),overlay=document.getElementById('overlay');
function openCart(){drawer.classList.add('open');overlay.classList.add('show')}
function closeCart(){drawer.classList.remove('open');overlay.classList.remove('show')}
document.getElementById('cartOpen').onclick=openCart;
document.getElementById('closeCart').onclick=closeCart;
overlay.onclick=closeCart;
document.getElementById('menuBtn').onclick=()=>{
  const n=document.getElementById('nav');
  n.style.display=n.style.display==='flex'?'none':'flex';
  n.style.flexDirection='column'; n.style.position='absolute'; n.style.top='60px'; n.style.left='0'; n.style.right='0'; n.style.background='#000'; n.style.padding='20px';
};
document.getElementById('signupBtn').onclick=()=>{const e=prompt('Enter email to join SmashRewards:');if(e)alert('Welcome! $5 off unlocked for '+e)};