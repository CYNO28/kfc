let append = (data)=>{
   data.forEach(element => {
    let box = create("div")
    let add = create("p");
    add.innerHTML = element.address;

    box.append(add);
    getId("deliAdd").append(box) 
    
   }); 
}



let arr =JSON.parse(localStorage.getItem("contact"))||[]
let submit= ()=>{
 let obj ={
     name:getId("name").value,
     mobile:getId("mobile").value,
     email:getId("email").value,
     address:getId("address").value
 };
 arr.push(obj)
 append(arr)
}

function getId(id){
    return document.getElementById(id);
}
function create(tagname){
    return document.createElement(tagname);
}








const kfc = JSON.parse(localStorage.getItem("kfc"));
//console.log("kfc",kfc)       for checking the data...

var total = kfc.reduce(function(sum,el,i,arr){
    return (sum+Number(el.price));
},0);
const subtotal=total;


getId("subtotal").innerHTML=subtotal;
getId("gst").innerHTML=gst(subtotal);
getId("Sum").innerHTML=finalsum();
function gst(amount){
    let x = ((amount*18)/100).toFixed(2)
    return x;
}

function finalsum(){
    let a = +(subtotal);
    let b = +(gst(subtotal));
    let amount = a+b;
    return amount;
}
let card =()=>{
    window.location.href="payment.html"
} 
let backtocart =()=>{
    window.location.href="cart.html"
}  