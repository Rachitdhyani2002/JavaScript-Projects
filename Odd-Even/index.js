function checkOddEven(){
    let input = document.getElementById('input-box').value;
     
    if(input%2==0){
        document.getElementById('heading').innerHTML=`${input} Is An Even Number`
    }
    else{
         document.getElementById('heading').innerHTML=`${input} Is Not An Odd Number`
    }
}