function submitForm(){
    const nameLabel ="<strong>Name:</strong>";
    const classLabel ="<strong>Class:</strong>";
    const dobLabel ="<strong>Date Of Birth:</strong>";
    const fatherLabel ="<strong>Father's Name:</strong>";
    const phoneLabel ="<strong>Phone Number:</strong>";
    document.getElementById('name1').innerHTML=nameLabel+document.getElementById('name').value;
    document.getElementById('class1').innerHTML=classLabel+document.getElementById('class').value;
    document.getElementById('date1').innerHTML=dobLabel+document.getElementById('date').value;
    document.getElementById('father1').innerHTML=fatherLabel+document.getElementById('father').value;
    document.getElementById('number1').innerHTML=phoneLabel+document.getElementById('number').value;
    let file = document.getElementById('image');
    let image1 = document.getElementById('image1');
    image1.src = URL.createObjectURL(file.files[0]);
    document.querySelector('.identity').style.display="block";
    document.querySelector('.form').style.display="none";
    document.querySelector('.btn').style.display="none";
    document.querySelector('#heading').style.display="none";
    
}
 function printCard(){
    document.querySelector(".print").style.display="none"
    window.print();
 }






// function submitForm(){
//     const nameLabel = "<strong>Name:</strong> ";
//     const classLabel = "<strong>Class:</strong> ";
//     const dobLabel = "<strong>Date of Birth:</strong> ";
//     const fatherLabel = "<strong>Father's Name:</strong> ";
//     const phoneLabel = "<strong>Phone Number:</strong> ";
//     document.getElementById('name1').innerHTML = nameLabel+document.getElementById('name').value
//     document.getElementById('class1').innerHTML = classLabel+document.getElementById('class').value
//     document.getElementById('date1').innerHTML = dobLabel+document.getElementById('date').value
//     document.getElementById('father1').innerHTML =fatherLabel+ document.getElementById('father').value
//     document.getElementById('number1').innerHTML = phoneLabel+document.getElementById('number').value
//     let file = document.getElementById('image');
//     let image1 =document.getElementById('image1');
//     image1.src = URL.createObjectURL(file.files[0])
//     document.querySelector('.identity').style.display = "block";
//     document.querySelector('.form').style.display = "none";
//     document.querySelector('.btn').style.display = "none";
//     document.querySelector('#heading').style.display="none"
// }
//  function printCard(){
//     document.querySelector('.print').style.display="none"
//     window.print();
//  }