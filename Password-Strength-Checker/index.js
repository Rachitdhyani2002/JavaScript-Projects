let password = document.getElementById('password');
let textP    = document.getElementById('textP');
let msg      =document.getElementById('msg');
password.addEventListener("input",()=>{
    if(password.value.length>0){
        textP.style.display="block"
    }
    else{
        textP.style.display="none"
    }
    if(password.value.length<4){
        msg.innerHTML="Weak"
        msg.style.color="red"
        textP.style.color="red"
        password.style.borderColor="red"
    }
   
    else if(password.value.length>=4 && password.value.length<8){
        msg.innerHTML="Medium"
        msg.style.color="yellow"
        textP.style.color="yellow"
        password.style.borderColor="yellow"
    }
    else if(password.value.length>=4){
        msg.innerHTML="Strong"
        msg.style.color="green"
        textP.style.color="green"
        password.style.borderColor="green"
    }
})





// let password = document.getElementById('password');
// let textP   = document.getElementById('textP')
// let msg = document.getElementById('msg')
// password.addEventListener("input",()=>{
//     if(password.value.length>0){
//         textP.style.display="block"
//     }
//     else{
//         textP.style.display="none"
//     }
     
//     if(password.value.length<4){
//         msg.innerHTML="Weak";
//         msg.style.color="red"
//         textP.style.color="red"
//         password.style.borderColor="red"
//     }
//     else if(password.value.length>=4 && password.value.length<8){
//         msg.innerHTML="Medium"
//         msg.style.color="yellow"
//         textP.style.color="yellow"
//         password.style.borderColor="yellow"
//     }
//     else if(password.value.length>=8){
//         msg.innerHTML="Strong"
//         msg.style.color="green"
//         textP.style.color="green"
//         password.style.borderColor="green"
//     }
// })