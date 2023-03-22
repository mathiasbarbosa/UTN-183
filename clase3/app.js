// alert('Javascript corriendo')


// * declarar variables y tipos de datos + metodos
var nombre;
nombre = 'Juan' // string

let apellido = 'Lopez' // string

const edad = 30 // number

let tieneHijos = false // boolean

let indefinido = undefined // undefined

let nulo = null // null

let objetos = {}
let array = []

// let saludo = "hola, como estan?"

// console.log(    saludo.toUpperCase() );

// saludo = saludo.toUpperCase()
// console.log( saludo.toLowerCase() );

let numero = "40" // string

numero = Number(numero)
console.log( typeof Number(numero));

// * Operadores
// igualdad ==  a == b // verdadero o falso
// estricta igualdad === a === b 
// distinto !=  a != b
// estrictamente distinto !== a !== b
//  > >= <  >=  
// AND && esMayorDeEdad && tienePermiso 
// OR || esMayorDeEdad || tienePermiso

// * condicionales
// let mayorDeEdad = 18


// if( 17 >= mayorDeEdad){
//     // las instrucciones para ejecutar
//     alert('podes pasar')
// }

// console.log('Continua la ejecucion');

// let notaExamen = prompt('que nota tenes en el examen?')
// console.log(notaExamen);
// console.log(typeof notaExamen);

// notaExamen = Number(notaExamen) 
// console.log(typeof notaExamen);


// if ( notaExamen >= 7 && notaExamen <= 10 ) {
//     alert("Estas aprobado")
// } else {
//     alert('No cumplis con las condiciones')
// }

// if ( notaExamen >= 4 && notaExamen <= 7 ) {
//     alert("Estas aprobado")
// } else if( notaExamen >= 8 && notaExamen <= 10){
//     alert('excelente nota, superado')
// }else if(notaExamen >= 0 && notaExamen <= 3) {
//      alert('casi')
// }else{
//     alert('no es un valor admitido')
// }

// * switch

// let color = prompt('decime un color')

// color = color.toLowerCase()

// switch (color) {
//     case 'rojo':
//         alert('el color es: ' + color)
//         break;
//     case 'azul':
//         alert('el color es: ' + color)
//         break; // break corta la ejecucion

//     case 'verde':
//         alert('el color es: ' + color)
//         break;
//     default:
//         alert('no tenemos ese color')
//         break;
// }




// * Ciclos
// let i = 0

// while(i < 5){
//     // instrucciones
//     i++
//     if ( i == 3) {
//         continue
//     }
//     console.log('el valor de la variable i es: ' + i);
//     // i = i + 1
  
    
// }

// let i = 1

// do{
//     console.log("se ejecuta una vez");
//     i = i + 1
// }while(i == 1)

// for(let i = 0; i <= 10; i++) {
//     console.log('el valor de la variable i es: ' + i);
// }


// * menu
let opciones = Number(prompt('1-hambur, 2-pizza, 3-tarta, 4-ir a pagar'))
let total = 0;
let precio = 0;
while( opciones != 4) {

switch (opciones) {
    case 1:
        precio = 1000
        alert('Agregaste al carrito una hambur, el precio es :' + precio)
        // total + total + precio
        total += precio
        break;

    
    case 2:
        precio = 1500
        alert('Agregaste al carrito una Pizza, el precio es : ' + precio)
        total += precio
        break;
        
    case 3:
        precio = 2000
        alert('Agregaste al carrito una tarta, el precio es: ' + precio)
        total += precio
        break;
        
    
        default:
            alert('no tenemos ese menu')
        break;
}
 opciones = Number( prompt('1-hambur, 2-pizza, 3-tarta, 4-ir a pagar'))
}

console.log("el total es: " + total);

// * Funciones
// Declarar la funcion

// function suma(){
//     // cuerpo de la funcion, lo que queremos ejecutar
//     let resultado = 10 + 5
//     console.log('el resultado es: ' + resultado);
// }

// function suma(num1, num2){
//     // cuerpo de la funcion, lo que queremos ejecutar
//     let resultado = num1 + num2
//    // console.log('el resultado es: ' + resultado);
//     return resultado
// }

// console.log( suma(10,5) );
// let resultadoFuncion = suma(30, 50)

// console.log(resultadoFuncion);

//* let vs var

// var saludo = 'Hola buenas noches'

// if (true) {
//     var saludo = 'Hola, buen dia'
// }

// console.log(saludo); 

let saludo = 'Hola buenas noches'

if (true) {
    let saludo = 'Hola, buen dia'
    console.log(saludo);
}

 console.log(saludo);