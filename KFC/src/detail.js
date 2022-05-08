function detail(){ 
    var name_ =document.getElementById("name").value;
    var email_ =document.getElementById("mail").value;
   
    if((name_.length<1)||(email_.length<1)){
        alert("Please enter proper Name & Email")
    }
    else{
         
    localStorage.setItem("userName",name_);
    localStorage.setItem("userEmail",email_);

         window.location.href="../dist/index.html"
    }
   
    
    }
  
function skip(){
    window.location.href="../dist/index.html"
}