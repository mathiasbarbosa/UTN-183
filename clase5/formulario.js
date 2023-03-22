
let formulario = document.querySelector('#formularioDatos')
let Inputnombre = document.querySelector('#nombre') 
let container = document.querySelector('#container')



formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    console.log(evento);
    console.log(evento.target);
    console.log(evento.target.children);
    console.log(Inputnombre.value);

    let nombre = evento.target.children[0].value
    let apellido = evento.target.children[1].value
    let cel = evento.target.children[2].value
    let dni = evento.target.children[3].value


    container.innerHTML = `
                    <h3> ${nombre} </h3>
                    <h3> ${apellido} </h3>
                    <h3> ${cel} </h3>
                    <h3> ${dni} </h3>
    `
})