var err= document.createElement("p");
    
    function mobile(){
        var phone=document.getElementById("skl").value;
if (phone.length!=10){

err.innerText="Please* enter a valid mobile number";

}
else{
    err.innerText=""
}


    }
document.getElementById("akl").append(err);


function sendotp(){ 
    let x =document.getElementById("skl").value;
    if(x.length==10){
    localStorage.setItem("mobileNo",document.getElementById("skl").value)
   
         window.location.href="./otp.html"
    }
   else {
       alert("Please enter a valid mobile number")

   }
}
// skip button
function skip(){
    window.location.href="./index.html"
    

}