function toDollar(){
    const input = document.getElementById('input');
    input.value = input.value*80+'$';
}
function toEuro(){
    const input = document.getElementById('input');
    input.value = input.value/90.26+"euro"
}