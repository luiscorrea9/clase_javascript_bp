
let mensaje

mensaje = "Hola mundo";
//alert(mensaje);

mensaje = "Hola mundo dos";
//alert(mensaje);

let a = 3, b = 4, c = 5;
console.log(a+b)

let nombre = "Luis";
let apellido = "Correa";

console.log("Hola",nombre,apellido);

const PI = 3.14;
  

//Infinity: representa el infinito matematico. Valor que es MAYOR que cualquier cosa
console.log(1/0);

//NaN: representa un error de cálculo
console.log("Hola"/5);

//BigInt: valores mayores que (2^53-1) o menor que -(2^53-1)

//String

let texto = "hola";

//funciones

function sumar(a , b){
    return a+b;
}

function descuento(valor){
    let valorDescuento=valor*0.2;
    let valorFinal = valor - valorDescuento;
    
    return`El valor del producto inicial es ${valor} 
    \n El valor con descuento es ${valorFinal} 
    \n El valor ahorrado es ${valorDescuento}`;

}

console.log(descuento(150000))



