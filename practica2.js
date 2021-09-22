var num = 0;
var num2 = 0;
var resultado = 0;
var total = 0;
var arreglo = new Array(99);
for(var i = 0; i <= 100 ; i++){
    arreglo[i] = i;
    console.log(arreglo[i]);
    i++;
    arreglo[i] = i;
    num = arreglo[i];
    if(i <= 100){
      i++;
      arreglo[i] = i;
      num2 = arreglo[i];
      resultado = num + num2;
      total += resultado;
      if(i > 100){
        total = total - arreglo[i];  
      }
    }
}
console.log("La sumatoria de los numeros no impresos es: " + total);
  