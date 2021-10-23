//DETERMINAR SI UN NUMERO ES NEGATIVO O POSITIVO
var num = prompt("Introduzca un numero: ");
function clase(){
    if (num > 0)
        console.log("EL numero es positivo");
    else if (num < 0)
        console.log("EL numero es negativo");
    }
clase();


//CALCULAR EL DESCUENTO
var precio = prompt("Introduzca el precio del producto: ");
var descuento = prompt("Introduzaca el descuento: ");

function calculoDYP(){
    var IVA = 1.21;
    var total = (precio - descuento) * IVA;
    console.log(total);
    return total;
}
calculoDYP();


//JUNTAR ORACIONES
function juntar(){
    var a = "Nat";
    var b = "ali";
    var c = a + b;
    return c;
}
function mostrar(){
    alert(juntar());
}
mostrar();

//CONTAR DE 100 EN 100
var numeros =[100,200,300,400,500,600,700,800];
function paraCada(array, action) {
 for (var i = 0; i < array.length; i++)
 action(array[i]);
 //action se enviaran ahí los datos.
}
paraCada(numeros,alert);
//alert ventana emergente en el navegador.


//calculadora
var p = prompt("Que tipo de operacion deseas hacer");
var r = 0;
var valores = parseInt(prompt("Cuantos valores deseas colocar en tu operacion?"));
var arreglo = [valores];
function preguntar() {
    let contador = 0;
    while (contador < valores) {
        arreglo[contador] = parseInt(prompt("Dame el valor No. " + (contador + 1)));
        contador++;
    }
}
function operacion() {
    preguntar();
    switch (p) {
        case "suma":
            for (var i = 0; i < valores; i++) {
                r += arreglo[i]
            }
            console.log("tu resultado es " + r);
            break;
        case "resta":
            for (var i = 0; i < valores; i++) {
                r -= arreglo[i]
            }
            console.log("tu resultado es " + r);
            break;
        case "multiplicacion":
            for (var i = 0; i < valores; i++) {
                r *= arreglo[i]
            }
            console.log("tu resultado es " + r);
            break;
        case "division":
            for (var i = 0; i < valores; i++) {
                r /= arreglo[i]
            }
            console.log("tu resultado es " + r);
            break;
        default:
            console.log("No se ha encontrado tu operacion");
            break;
    }
}
operacion();