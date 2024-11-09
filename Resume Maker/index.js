function addNewWeField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.setAttribute('rows',2);
    newNode.setAttribute('placeholder','Enter Here')
    newNode.classList.add('mt-2');
    let weOb=document.getElementById('we');
     weOb.appendChild(newNode);
}

function addNewAqField(){
    let node=document.createElement('textarea');
    node.classList.add('form-control');
    node.classList.add('aqField');
    node.classList.add('mt-2')
    node.setAttribute('rows',2);
    node.setAttribute('placeholder','Enter Here')
    let aq = document.getElementById('aq');
    aq.appendChild(node);
}
function addNewEducationField(){
    let node1 = document.createElement('textarea');
    node1.classList.add('form-control');
    node1.classList.add('educationField');
    node1.classList.add("mt-2")
    node1.setAttribute('rows',2)
    node1.setAttribute('placeholder','Enter Here')
    let education=document.getElementById('education');
    education.appendChild(node1);
}





function generateCV(){
let nameField =document.getElementById('nameField').value;
let nameT1 =document.getElementById('nameT1');
nameT1.innerHTML="👨"+nameField;
document.getElementById('nameT2').innerHTML=nameField;

let contactField = document.getElementById('contactField').value;
let contactT = document.getElementById('contactT');
contactT.innerHTML='📞-+'+contactField;
 

let addressField = document.getElementById('addressField').value;
let addressT = document.getElementById('addressT');
addressT.innerHTML ="🏡-"+addressField;


let fbField = document.getElementById('fbField').value;
let fbT = document.getElementById('fbT');
fbT.innerHTML=fbField;

let instaField = document.getElementById('instaField').value;
let instaT = document.getElementById('instaT');
instaT.innerHTML=instaField;

let linkedInField = document.getElementById('linkedInField').value;
let linkedT = document.getElementById('linkedT');
linkedT.innerHTML = linkedInField;

document.getElementById('objectiveT').innerHTML = document.getElementById("objectiveField").value;
let wes = document.getElementsByClassName('weField')
let str="";
for(let e of wes){
    str = str+`<li> ${e.value} </li>`
}
document.getElementById('weT').innerHTML=str;

let aqs = document.getElementsByClassName('aqField');
let str1="";
for(let e of aqs){
    str1 = str+`<li>${e.value}</li>`
}
document.getElementById('aqT').innerHTML=str1;

if(nameField==""||contactField==""||addressField==""||fbField==""||instaField==""||linkedInField==""||wes.length===0||aqs.length==0){
    alert("Please! enter values for all fields")
}
else{

    document.getElementById("cv-form").style.display="none"
    document.getElementById("cv-template").style.display="block"
}



}

function printCV(){
    window.print();
    document.getElementById('print-btn').style.display="none"
}