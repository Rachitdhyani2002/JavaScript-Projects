function getAge(){
    const input = document.getElementById('input');
    const text  = document.getElementById('text');
    const text1 = document.getElementById('text1');
    const age   =Math.floor(Math.random()*100)
    if(input.value===""){
        text.innerHTML="Please Enter SomeThing"
        text1.style.display="none"
    }
    else{
        text.innerHTML=`Your Age Is ${age}`
        text.style.display="block"
    }
    if(age>=1 && age<=30){
        text1.innerHTML="👦"
    }
    else if(age>=31 && age <=59){
        text1.innerHTML = "👨"
    }
    else{
        text1.innerHTML = "👴";
    }
}
// function getAge() {
//     const input = document.getElementById('input');
//     const text = document.getElementById('text');
//     const text1 = document.getElementById('text1');
//     const age = Math.floor((Math.random() * 100))
//     if (input.value === "") {
//         text.innerHTML = "Please Enter SomeThing"
//         text1.style.display = "none"
//     }
//     else {
//         text.innerHTML = `Your Age Is ${age}`
//         text1.style.display = "block"
//     }
//     if (age >= 1 && age <= 30) {
//         text1.innerHTML = "👦"
//     }
//     else if (age >= 31 && age <= 59) {
//         text1.innerHTML = "👨"
//     }
//     else if (age >= 60) {
//         text1.innerHTML = "👴";
//     }
// }