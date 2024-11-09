function updateTime(){
    const date = new Date();
    document.getElementById('hrs').innerHTML=date.getHours().toString()+"h";
    document.getElementById('min').innerHTML=date.getMinutes().toString().padStart(2,"0")+"m";
    document.getElementById('sec').innerHTML=date.getSeconds().toString().padStart(2,"0")+"s";
}
updateTime();
setInterval(updateTime,1000);


// function updateTime(){
// const date = new Date();
// document.getElementById('hrs').innerHTML = date.getHours().toString()+"h"
// document.getElementById('min').innerHTML = date.getMinutes().toString().padStart(2,"0")+"m"
// document.getElementById('sec').innerHTML = date.getSeconds().toString().padStart(2,"0")+"s"
// }
// updateTime();
// setInterval(updateTime,1000);

