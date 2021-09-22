var i = prompt("ingrese un numero:")
function makeid(length) {
    var palabra = '';
    var letra ='abcdefghijklmnopqrstuvwxyz';
    var letraLength = letra.length;
    for ( var i = 0; i < length; i++ ) {
       palabra += letra.charAt(Math.floor(Math.random() * letraLength));
    }
    return palabra;
 }
 
 console.log(makeid(i));
 for (let a = 1; a < i; a++){
     console.log(makeid(i));
 }