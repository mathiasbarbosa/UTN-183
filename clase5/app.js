//* obtener elementos del html

// let parrafos = document.getElementsByTagName('p')
let parrafos = document.querySelectorAll('p')
console.log(parrafos);

// let porClase = document.getElementsByClassName('parrafos')
let porClase = document.querySelectorAll('.parrafos')
console.log(porClase);

// let h1 = document.getElementById('tituloPrincipal')
let h1 = document.querySelector("#tituloPrincipal")
console.log(h1);

//* propiedades
console.log( h1.id);
h1.id = 'nuevoId'

console.log( h1.innerHTML); 
h1.innerHTML = "<em> Hola estoy cambiando el titulo </em>"

// console.log( h1.innerText); 
// h1.innerText = '<em> estoy cambiando el contenido tambien </em>'

let h2 = document.querySelector('#tituloSecundario')
console.log(h2.style)

// h2.style.color = 'red'
console.log( h2.classList);
h2.classList.add('tituloh2')

let container = document.querySelector('#container')

console.log( container.children);

console.log(container.children[0]);

// container.style.backgroundColor = 'tomato'

console.log(parrafos);

// parrafos.style.color = 'red'

for (let i = 0; i < 4; i++) {
    console.log(parrafos[i]);
    parrafos[i].style.color = 'red'
}

let btn = document.querySelector('#btnClick')

function saludar() {
    alert('hola como estas')
}

// btn.addEventListener('click', saludar )
btn.addEventListener('click', function(){

    if (h2.style.color == 'red') {
        h2.style.color = 'green'
    }else{
        h2.style.color = 'red'
    }

}  )

let h3 = document.createElement('h3')

let texto = document.createTextNode('el texto que queremos crear dinamicamente')

h3.append(texto)

container.append(h3)


let botones = document.querySelectorAll('button')

botones.forEach( function(boton){
    boton.addEventListener('click', function(evemto){
        alert(`el producto agregado es: ${evemto.target.id}`)
    })
} )