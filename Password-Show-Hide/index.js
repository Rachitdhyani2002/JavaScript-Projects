function showHide(){
    let pass = document.getElementById('pass');
    let btn  = document.getElementById('btn');
    if(pass.type==="password"){
        pass.setAttribute('type','text');
        btn.textContent="Hide";
        btn.style.background="green";
    }
    else{
        pass.setAttribute('type','password');
        btn.textContent="Show";
        btn.style.background="red";
    }
}



// function showHide(){
//     let pass=document.getElementById('pass');
//     let btn=document.getElementById('btn');
//     if(pass.type==="password"){
//         pass.setAttribute('type','text')
//         btn.textContent="Hide"
//         btn.style.background="green"
//     }
//     else{
//         pass.setAttribute('type','password')
//         btn.textContent="Show"
//         btn.style.background="red"
//     }
// }