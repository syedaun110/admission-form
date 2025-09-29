

function submitData(){

    let userName=document.getElementById("name").value
    let userEmail=document.getElementById("email").value
    let userPhone=document.getElementById("phone").value
    let userMessage=document.getElementById("message").value

    let errorName = document.getElementById("error-user").innerHTML=""
    let errorEmail= document.getElementById("error-email").innerHTML=""
    let errorPhone = document.getElementById("error-phone").innerHTML=""
    let errorMsg= document.getElementById("error-message").innerHTML=""

    
    document.getElementById("name").style.border= "1px solid #5eff00"
    document.getElementById("phone").style.border= "1px solid #5eff00"
    document.getElementById("email").style.border= "1px solid #5eff00"
    document.getElementById("message").style.border= "1px solid #5eff00"


    let isvalid = true

   if ( userName === "" ){
    document.getElementById("error-user").innerHTML="This is Field required"
    document.getElementById("name").style.border= "1px solid darkred"  
    isvalid = false }

   if ( userEmail === ""){
    document.getElementById("error-email").innerHTML="This is Field required"
    document.getElementById("email").style.border= "1px solid darkred"
    isvalid = false 
   }

   if ( userPhone === ""){
    document.getElementById("error-phone").innerHTML="This is Field required"
    document.getElementById("phone").style.border= "1px solid darkred"
    isvalid = false 
   }

   if( userMessage === ""){
    document.getElementById("error-message").innerHTML="This is Field required"
    document.getElementById("message").style.border= "1px solid darkred"
    isvalid = false 
   }
   
  if (isvalid)  {

      showmsg = ""

      errorName.innerHTML=""
      errorEmail.innerHTML=""
      errorPhone.innerHTML=""
      errorMsg.innerHTML=""

    
    document.getElementById("name").style.border= "1px solid #5eff00"
    document.getElementById("phone").style.border= "1px solid #5eff00"
    document.getElementById("email").style.border= "1px solid #5eff00"
    document.getElementById("message").style.border= "1px solid #5eff00"
    
document.getElementById("name").value=""
document.getElementById("email").value=""
document.getElementById("phone").value=""
document.getElementById("message").value=""

        console.log(userName);
        console.log(userPhone);
        console.log(userEmail);
        console.log(userMessage);

        alert("FORM AS BEEN SUBMITTED")
        

    }
}


