function addTask(){
    let input = document.getElementById('input').value;
    let node  = document.createElement("h1");
    let btn   = document.createElement('button');
    btn.classList.add('remove');
    btn.setAttribute('id','Rbtn');
    btn.innerText="Remove";
    btn.addEventListener('click',()=>{
        node.remove();
    })
    node.classList.add('task');
    node.setAttribute("id","task1");
    node.innerHTML=input;
    node.appendChild(btn);
    let box = document.getElementById('box1');
    box.appendChild(node);
    remove();
}

function remove(){
    let input = document.getElementById('input');
    input.value="";
}


// function addTask(){
//     let input = document.getElementById('input').value;
//     let node  = document.createElement("h1");
//     let btn   = document.createElement('button');
//     btn.classList.add('remove');
//     btn.setAttribute("id","Rbtn")
//     btn.innerText ="Remove";
//     btn.addEventListener('click',()=>{
//         node.remove();
//     })
//     node.classList.add('task');
//     node.setAttribute("id","task1")
//     node.innerHTML = input
//     node.appendChild(btn);
   
//     let box   = document.getElementById('box1');
//     box.appendChild(node);
//     remove()
// }
// function remove(){
//     let input = document.getElementById('input');
//     input.value="";
// }