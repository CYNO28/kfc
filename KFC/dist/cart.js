import { navbar } from "../component/navbar.js";
import startorder from "../component/startorder.js";
import footer from "../component/footer.js";

let nav=document.querySelector("#navbar");
nav.innerHTML=navbar();
let foot=document.querySelector("#footer")
foot.innerHTML=footer();
let start=document.querySelector('#startorder')
start.innerHTML=startorder();












const cart = JSON.parse(localStorage.getItem("cart"));
console.log("cart",cart)

//append length into cart navbar just change id...
const len = cart.length
//getId("len").innerHTML = len;




function getId(id){
    return document.getElementById(id); 

}
    function create(tagname){
        return document.createElement(tagname);
    }





//code for check button on checkout ....

let money =JSON.parse(localStorage.getItem("money"))||[];
 let x = getId("bag");
 x.addEventListener("change",function(e){
     if(x.checked){
         money[0] += 6;
         console.log("cons::",money[0])
     }else{
        money[0] = money[0] -6;
         console.log("yyyy::",money[0])
     }
 })


 let y = getId("donation");
 y.addEventListener("change",function(e){
     if(y.checked){
        money[0] += 5;
        localStorage.setItem("money",JSON.stringify(money))
        return money[0];
         console.log("yyyy",money[0])
     }else{
        money[0] = money[0]-5;
        localStorage.setItem("money",JSON.stringify(money))
        return money[0];
         console.log("xxxx",money[0])
     }
 })

 console.log("func:",money[0])
let checkButton= () =>{
    if(check==true){
        console.log("xxxx")
    }else{
        console.log("yyyy")
    }
}




//price sum....


var total = cart.reduce(function(sum,el,i,arr){
    return (sum+Number(el.price));
},0);
const subtotal=total;
//getId("money").innerText=subtotal;
gst(subtotal);
getId("raw").innerHTML=subtotal;



//gst calculation...
function gst(amount){
    let x = ((amount*18)/100).toFixed(2)
    return x;
}
getId("tax").innerHTML=gst(subtotal);


// final amount.....

function finalsum(){
    let a = +(subtotal);
    let b = +(gst(subtotal));
    let amount = a+b;
    console.log("inside::",amount)
    money.push(amount)
    localStorage.setItem("money",JSON.stringify(money));
}
console.log("money:::",money[0]);

// function pymtAppear(){
//     if(len<1){
//         return false;
//     }else{
//         //console.log(payment())
//     }
// }



let appenddata=(cart)=>{
    cart.forEach(element => {
      let box = create("div")
      box.setAttribute("id","parent")


      let pricebox = create("div");

      let box1  = create("div")
      box1.style.width="100%"
      box1.setAttribute =("id","carf","class","f")

      
      let image = create("img")
      image.src = element.img_url;
      image.style.width = "100px";
      image.style.height = "100px";


      let name = create("p")
      name.setAttribute("class","foodp")
      name.innerText = element.name;

       let type = create("p")
       type.setAttribute("class","foodp")
       type.innerText = element.type;

       let price = create("p");
       price.innerText = "₹"+element.price;

       let btn= create("button");
       btn.innerText ="Remove";
       btn.setAttribute("id","btn")
       btn.addEventListener("click",function(element,i){
           removeItem(element,i);
       })

       pricebox.append(price)
       box1.append(name,type,btn)
       box.append(image,box1,pricebox)
       getId("cart").append(box);
    });
    }
    appenddata(cart)



getId("checkout").addEventListener("click",paymentpage);
function paymentpage(){
    window.location.href="payment.html"
}

let removeItem =(el,i)=>{
    cart.splice(i,1)
    localStorage.setItem("cart",JSON.stringify(cart));
    location.reload();
}

let appendData=(cart)=>{
    cart.forEach(element => {

      let box = create("div");
      box.style.border="1px solid white";
    
      let image = create("img")
      image.src = element.img_url
      image.style.height="200px";
      image.style.width = "250px"
      
      box.append(image);
      getId("horizontal").append(box)
    });
};
    appendData(cart)