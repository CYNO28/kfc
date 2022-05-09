
let kfc = JSON.parse(localStorage.getItem("kfc"));
console.log("kkffcc::",kfc)




document.querySelector("form").addEventListener("submit",payFun);
     function payFun(e)
     {
          e.preventDefault();
          const name = document.querySelector("#name").value;
          const cardNum = document.querySelector("#cardNum").value;
          const ccv = document.querySelector("#ccv").value;
          const expiry = document.querySelector("#expiry").value;
          // console.log(name,cardNum,ccv,expiry);
          const cardCheck=(cardNum=="1234567890"||cardNum=="1234567891"||cardNum=="1234567892"||cardNum=="1234567893"||cardNum=="1234567894"||cardNum=="1234567895");
           const ccvCheck= (ccv==123||ccv==124||ccv==125||ccv==126||ccv==127||ccv==128||ccv==129);

           





          if(name&&cardCheck&&ccvCheck&& expiry)
          {
              alert("OTP sent");
              window.location.href="otp.html"

          }
          else
          {
               alert("error");
          } 


          document.querySelector("#name").value=null;
          document.querySelector("#cardNum").value=null;
          document.querySelector("#ccv").value=null;
          document.querySelector("#expiry").value="2022-02";
     }


// implementation of Payment Details Section


const payData=JSON.parse(localStorage.getItem("cart"))||[];

const frstB=document.createElement("div");

const frstD1=document.createElement("div");

const frstB1=document.createElement("div");


let order=document.createElement("p");
order.innerText= "Delivering order to";
order.style.color="gray";
order.style.marginTop="15px"



let userN=document.createElement("h5")
userN.innerText="MOHD TANVEER"
userN.style.paddingLeft="10px";
userN.style.marginTop="15px";

frstB1.style.display="flex";
frstB1.append(order,userN)

// Delivery Adress details 
const add="101,Malaviya Nagar -110017"
let hrD=document.createElement("h3");
hrD.style.width="100%";
hrD.innerText
frstD1.append(frstB1,add,hrD);
// frstD1.style.borderBottom="1px solid gray";

let payH=document.createElement("h3");
payH.innerText
payH.style.marginTop="5%";
frstB.append(frstD1,payH)
document.querySelector("#paymentContainer").append(frstB);



//here we are wrintng the code for map function

let length=kfc.length;
let total = kfc.reduce(function(sum,el,i,arr){
          return (sum+Number(el.price));
     },0);
     console.log(total)
     // var total1=total;
     // console.log("Total"+totalet

// random date Generator...
function getRandomDate() {
     const maxDate = Date.now();
     const timestamp = Math.floor(Math.random() * maxDate);
     return new Date(timestamp);
 }
 let x = getRandomDate()
 console.log("XXX:::",x);







// cart items....

kfc.map(function(el,i,arr){
let box = document.createElement("div");

let box1=document.createElement("div");

img.style.height="50px";
img.style.width="40px";

let box2=document.createElement("div");
box2.setAttribute("class","general gleftt")

let name = document.createElement("p");
name.innerText=el.name;
name.setAttribute("id","itemName");
name.style.color="gray";

var deliveryDate=document.createElement("div");
deliveryDate.style.display="flex";
var date = document.createElement("p");
date.innerText="Estimated delivery by ";
date.style.marginTop="15px"
var dateE=document.createElement("p");
dateE.innerText ;
date.setAttribute("class","general")

name.setAttribute("class","name");

var hrD1=document.createElement("hr");
hrD1.style.width="100%";
box2.append(name,deliveryDate,hrD1);
deliveryDate.append(date,dateE);

box1.append(img,box2);

box1.style.display="flex";



box.append(box1)

document.querySelector("#paymentContainer").append(box);

});

priceSummary=document.createElement("h2");
priceSummary.innerText;
document.querySelector("#paymentContainer").append(priceSummary);
          
          var totalPrice=document.createElement("div");
          var p1=document.createElement("p")
          p1.innerText="Total MRP (Incl. of taxes) ";
          var totalP=document.createElement("p");
          totalP.innerText="₹"+totalS;
          totalPrice.style.display="flex";
          totalPrice.style.justifyContent="space-between";
          totalPrice.append(p1,totalP);


          var dF=document.createElement("div");
          var p2=document.createElement("p");
          p2.innerText="Delivery Fee ";
          var p3=document.createElement("p");
          if(length==0)
          {
               p3.innerText="Add item";
               p3.style.color="red";
          }
          else if(total>=500)
          {
                p3.innerText="FREE";
                p3.style.color="green";
          }
          else
          {
               p3.innerText=("₹ 50");
          }
          dF.style.display="flex";
          dF.style.justifyContent="space-between";
          dF.style.padding="0px 10px";
           dF.append(p2,p3);


           let discountP=document.createElement("div");
           
           let dP2=document.createElement("p");
           dP2.innerText="- ₹"+(totalS-total);
           console.log(dP2);
           discountP.append(dP2);
           discountP.style.display="flex";
           discountP.style.justifyContent="space-between";
           discountP.style.padding="0px 10px";

           var hrD2=document.createElement("hr");
           hrD2.style.width="100%";

           

           var subT=document.createElement("div");
          var sT1=document.createElement("h2");
          sT1.innerText="Final amount ";
          var sT2=document.createElement("p");
          sT2.innerText="₹ "+total;

          subT.append(sT1,sT2);

          subT.style.display="flex";
          subT.style.justifyContent="space-between";
          subT.style.padding="0px 10px";

          document.querySelector("#paymentContainer").append(totalPrice,dF,discountP,hrD2,subT);
