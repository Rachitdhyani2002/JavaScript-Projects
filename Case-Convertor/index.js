function toLower(){
    const input =document.getElementById('text');
    input.value =input.value.toLowerCase();
}
function toUpper(){
    const input =document.getElementById('text');
    input.value =input.value.toUpperCase();
}
function toCap(){
    const input =document.getElementById('text');
    input.value =input.value.charAt(0).toUpperCase()+input.value.slice(1).toLowerCase()
}




// function toLower(){
//     const input = document.getElementById('text')
//     input.value=input.value.toLowerCase();
    
// }
// function toUpper(){
//     const input = document.getElementById('text')
//     input.value=input.value.toUpperCase();
    
// }
// function toCap(){
//     const input = document.getElementById('text')
//     input.value=input.value.charAt(0).toUpperCase()+input.value.slice(1).toLowerCase();
    
// }

