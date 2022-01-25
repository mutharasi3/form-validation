let createform = document.getElementById('create-account');
function handleformsubmit(event){
    event.preventDefault();
// firstname validation
let regName = /^[a-zA-Z]*$/;
let fnameElement=document.getElementById('f-name'),
fnamevalue = fnameElement.value;
if(fnamevalue != "" &&fnamevalue.match(regName)){
    console.log('it is correct');
fnameElement.classList.add('success');
}
else{
    console.log('it is wrong');
    fnameElement.classList.add('error');
    }
// check if middlename is empty
let midName = /^[a-zA-Z]*$/;
let mnameElement=document.getElementById('m-name'),
mnamevalue = mnameElement.value;
if(mnamevalue != "" && mnamevalue.match(midName)){
    console.log('it is correct');
    mnameElement.classList.add('success');
}
else{
    console.log('it is wrong');
    mnameElement.classList.add('error');
    }
// check if lastname is empty
let lasName = /^[a-zA-Z]*$/;
let lnameElement=document.getElementById('l-name'),
lnamevalue = mnameElement.value;
if(lnamevalue != "" &&lnamevalue.match(lasName)){
    console.log('it is correct');
    lnameElement.classList.add('success');
}
else{
    console.log('it is wrong');
    lnameElement.classList.add('error');
    }
// check if email id is empty
let mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
emailidElement =document.getElementById('email-id'),
emailidvalue = emailidElement.value;
if(emailidvalue != ""){
if(emailidvalue.match(mailformat)){
console.log('it is correct');
 emailidElement.classList.add('success');
}
else{
console.log('it is wrong');
emailidElement.classList.add('error');
}
}else{
    console.log("it is wrong");
    emailidElement.classList.add('error');    
}
// check if password is empty
let PasswordElement = document.getElementById('Password');
Passwordvalue = PasswordElement.value;
// Validate lowercase letters
let lowerCaseLetters = /[a-z]/g;
if(Passwordvalue.match(lowerCaseLetters)) {  
    console.log('lowercase correct');
PasswordElement.classList.add("success");
} else {
    console.log('lowercase wrong');
    PasswordElement.classList.add("error");
}
// Validate capital letters
let upperCaseLetters = /[A-Z]/g;
if(Passwordvalue.match(upperCaseLetters)) {  
    console.log('uppercase correct')
    PasswordElement.classList.add("success");
} else {
    console.log('uppercase wrong');
    PasswordElement.classList.remove("error");
}

// Validate numbers
let numbers = /[0-9]/g;
if(Passwordvalue.match(numbers)) {  
    console.log('number correct');
    PasswordElement.classList.add("success");
} else {
    console.log('number wrong');
    PasswordElement.classList.add("error");
}

// Validate length
if(Passwordvalue.length >= 8) {
    console.log('length correct');
    PasswordElement.classList.add("success");
} else {
    console.log('length wrong');
    PasswordElement.classList.add("error");
}
// check if c password is empty
let confirmpasswordElement = document.getElementById('c-password');
confirmpasswordvalue = confirmpasswordElement.value;
if(confirmpasswordvalue.match(Passwordvalue))
{
    console.log('cpass is correct');
confirmpasswordElement.classList.add("success");
} else {
    console.log('cpass is wrong');
    confirmpasswordElement.classList.add("error");
}
//check mobile number is empty
let mobileElement = document.getElementById('mobileno');
mobilevalue = mobileElement.value;
let phoneno= /^\d{10}$/;
if(mobilevalue.match(phoneno)){
    console.log('number is correct');
   mobileElement.classList.add("success");
}
else{
    console.log('number is wrong');
    mobileElement.classList.add("error");
}
//bio is empty
let bioElement = document.getElementById('bio');
biovalue = bioElement.value;
if(biovalue.length>=100){
    console.log('bio is correct');
   bioElement.classList.add("success");
}
else{
    console.log('bio is wrong');
    bioElement.classList.add("error");
  
}
}

createform.addEventListener('submit',handleformsubmit);

