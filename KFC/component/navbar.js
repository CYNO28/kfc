function navbar(){
  let user=localStorage.getItem("userName")||0
let cart_total = 0;
if(user){
  user="Account"
}
else{
  user="Sign In"
}
let cart=JSON.parse(localStorage.getItem("cart"))||[]
let total=0
for(let i=0;i<cart.length;i++){
  total+=cart[i].price
}
cart_total=total

let cart_item=0
cart_item=cart.length
return `<nav>
    <div id="nav_left">
    <div id="logo">
        <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="">
    </div>
    <div id="menu">
      <a href="../dist/menu.html">Menu</a>
    </div>
    <div id="Deals">
      <a href="../dist/deals.html">Deals</a>
    </div>
  </div>

  <div id="nav_right">
    <div id="avatar">
        <img src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg" alt="">
    </div>
    <div id="signup">
      <a href="../dist/sign.html">${user}</a>

    </div>
    <div id="cart_total">
        <p>₹${cart_total}</p>
    </div>
    <div id="cart_icon">
        <p><a href='../dist/cart.html'>${cart_item} </a></p>
    </div>   
  </div>
</nav>`
}


export {navbar};