function checkPalindrome(){
    let input = document.getElementById("input-container").value;
    let str =input.toLowerCase().trim();
    let reverse=str.split('').reverse().join("");
    if(str===reverse){
        document.getElementById('heading').innerHTML=`${input} Is Palindrome`
    }
    else{
        document.getElementById('heading').innerHTML=`${input} Is Not Palindrome`
    }
}








// function checkPalindrome(){
//     let input = document.getElementById('input-container').value;
//     let str = input.toLowerCase().trim();
//     let reverse = str.split('').reverse().join("");
//     if(str===reverse){
//         document.getElementById('heading').innerHTML=`${input} Is Palindrome`
//     }
//     else{
//         document.getElementById('heading').innerHTML=`${input} Is  Not Palindrome`
//     }
// }