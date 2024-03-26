const passwordBox= document.getElementById("password");
const length=12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number= "0123456789"
const symbol="@#$%^&*()_+q|}{[]><-=";

const alChars=upperCase+lowerCase+number+symbol;

function createPassword(){
    let password=""; 
    while(length > password.length){
        password += alChars[Math.floor(Math.random()* alChars.length)];

    }
    passwordBox.value=password;
}