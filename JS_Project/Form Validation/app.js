var nameError=document.getElementById('name-error');
var phoneError=document.getElementById('phone-error');
var emailError=document.getElementById('email-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');

function validateName(){
    var name= document.getElementById('contact-name').value;

    if(name.length ===0){
        nameError.innerHTML ='Name is required' ;
        return false;
        
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Enter Fullname'
        return false;
    }
    nameError.innerHTML='valid';
    return true;
}
function validatePhone(){
     var phone= document.getElementById('contact-phone').value;

     if(phone.length===0){
        phoneError.innerHTML='Phone number is required';
        return false;
     }
     if(!phone.length==10){
        phoneError.innerHTML="Enter Atleast 10 digits";
        return false;
     }
     if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Enter in required Format';
        return false;
     }
     phoneError.innerHTML="valid";
}
function validateEmail(){
    var email= document.getElementById('contact-email').value;

    if(email.length===0){
        emailError.innerHTML='Email is reqiured';
        return false;
    }
    if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        emailError.innerHTML='Email Invalid';
        return false;
    }

    emailError.innerHTML='valid mail';
    return true;

}
function validateMessage(){
    var message= document.getElementById('contact-message').value;
    var reqiured=10;
    var left= reqiured-message.length;

    if(left>0){
        messageError.innerHTML=left +'more characters required';
        return false;
    }

    messageError.innerHTML="Done";
    return true;
}

function ValidateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.innerHTML='Fix error'
        return false;
    }
}