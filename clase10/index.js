

// $(selector).accion()

// $(document).ready( function(){

//     $('#btn').click( () => {
//         $('h1').hide()
//     })
// })


// let nombre = 'Juan'
// let apellido = 'Gonzalez'
// let edad = 20

// let nombre2 = 'Juan'
// let apellido2 = 'Gonzalez'
// let edad2 = 20

// let nombre2 = 'Juan'
// let apellido2 = 'Gonzalez'
// let edad2 = 20

// objeto literal
let usuario = {
    nombre: 'juan',
    apellido: 'gonzalez',
    edad: 30,
    'direccion calle': 'calle 1'
}


console.log( usuario.nombre);
console.log(usuario['direccion calle']);
// console.log(usuario.direccion calle]);

console.log('edad' in usuario);

for (const key in usuario) {
    console.log(key);
    console.log(usuario[key]);
}

// funcion constructora

// function User(nombre, apellido, edad){

//     // propiedades
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad

//     // metodos
//     this.saludar = function(){
//         alert('Hola me llamo ' + this.nombre)
//     }
// }

// // instanciarlo

// let usuario1 = new User('Pepito', 'Lopez', 10)
// let usuario2 = new User('Juan', 'Gonzalez', 20)
// console.log(usuario1);

// usuario1.saludar()
// usuario2.saludar()


class Auto{
    // propiedades
    constructor(color, motor, ruedas){
        this.colorAuto = color;
        this.motorAuto = motor;
        this.ruedasAuto = ruedas
        this.velocidad = 0
    }

    // metodos
    acelerar(velocidad){
        alert((this.velocidad += velocidad ) +'km/h ' + 'anda despacio loquito')
    }

}


let auto = new Auto('rojo', 1.6, 3)
console.log(auto);
auto.acelerar(50)
console.log(auto)
auto.acelerar(150)

auto.puertas = 4
console.log(auto);