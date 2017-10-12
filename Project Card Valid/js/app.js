//Programa para validar numero de tarjeta de credito.
//Función si es tarjeta válida
function isValidCard(cardNumber){

    //Declaramos un arreglo vacio
    var array =[];
    //Longitud de número de tarjeta
    var size = cardNumber.length;
    //Variable que almacena cada dígito nuevo de número de tarjeta
    var digit;
    //Variable que almacenará suma de digitos
    var result=0;
    //Pasar cada número al arreglo
    for(i=0; i< size; i++){
       array.push(parseInt(cardNumber[i]));
    }
    //Invertir orden de números en el array
    array.reverse();
    //Aplicar fórmula del algoritmo de Luhn
    for(var i=0;i<size;i++){
        //Verificar posiciones pares según computadora
        //Para humano posición par es para computadora indice impar
        if((i%2)!==0){
            //Multiplicar por 2 y verificar si es mayor o igual a 10
            if(array[i]*2 >= 10){
                //Obtengo el divisor
                var d=parseInt(array[i]*2/10);
                //Obtengo el residuo
                var r=array[i]*2%10;
                //Sumo los digitos
                digit=d+r;
             }
             else
                //Caso contrario solo se mutiplica por dos
                digit=array[i]*2;
        }
        else
          //Caso contrario si posición es impar
            digit=array[i];
        //Sumamos todos los digitos de número de tarjeta
        result += digit;
    }
    // Si la suma total, módulo 10 es 0, es tarjeta valida
    if(result%10===0){
        
      return  alert("Tarjeta válida");
    }
    //Caso contrario tarjeta es inválida
    else{
       return alert("Tarjeta inválida");
    }
  
}

  
do {
  var cardNumber = prompt('Ingresar número de tarjeta');
  var temp = true;
  var numType=parseInt(cardNumber);
  //se valida que el número de dígitos sea 13 y sea solo número
    if (cardNumber.length !== 13 || Number.isInteger(numType)) {

       //si no ingresó 13 dígitos o no ingresó números, realizar un alert para indicar el error al usuario
      temp = false;
      alert('Ingresar solo números de 13 dígitos');
    }
    else {
      //volver a pedir que ingrese su número de tarjeta.
      isValidCard(cardNumber);
    }

}
//mientras sea vacio o no se cumpla con lo establecido volver a preguntar
while (cardNumber === '' || temp == false);
