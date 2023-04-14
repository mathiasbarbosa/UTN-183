


const containerProducts = document.querySelector('#containerProducts')
let products = [];

const getAllProducts = async () => {

  try {
      
    let response =  await fetch('./products.json')
    console.log(response);
    console.log(response.status);
    console.log(response.ok);
    if (response.status !== 200 ) {
      throw new Error(response.status)
    }
 
    return response.json()

  } catch (error) {
    Swal.fire({
      title: 'Error!',
      text: `Error en la solicitud: ${error}`,
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }


}


getAllProducts()
  .then((response) => products = response)


function htmlCards(arrayProductos){

  let fragment = document.createDocumentFragment()
  
  // let html = ''

  arrayProductos.forEach(function(elemento){
    console.log(elemento.nombre);
      let divProduct = document.createElement('div')
      divProduct.classList.add('producto')

      let boton = document.createElement('button')
      boton.classList.add('btn')
      boton.id = `producto-${elemento.id}`
      boton.textContent = 'Añadir al carrito'

      divProduct.innerHTML += 
                                
                            `                        
                                                 
                                  <img src=${elemento.imagen} alt="producto">
                                  <h3>${elemento.nombre}</h3>
                                  <p>${elemento.descripcion}</p>
                                  <p>${elemento.precio}</p>
                                  <a href="#">Ver más</a>
                           
                            `
      divProduct.append(boton)
      fragment.append(divProduct)
      addToCart(boton)
      
    })

    containerProducts.append(fragment)

}


function addToCart(boton){
  boton.addEventListener('click', function(evento){
    let arrayCarrito =  JSON.parse(localStorage.getItem('carrito')) || []
    let id = evento.target.id
    console.log(id);
    id = id.slice(9)
    console.log(id);
    let busqueda =  products.find( elemento =>  elemento.id == id )
    if (busqueda !== undefined) {

      let findIndex =  arrayCarrito.findIndex( item => item.id == busqueda.id)
      if (findIndex !== -1) {
        arrayCarrito[findIndex].cantidad += 1
        localStorage.setItem('carrito', JSON.stringify( arrayCarrito ))
      }else{
        busqueda.cantidad = 1
        arrayCarrito.push(busqueda)
        localStorage.setItem('carrito', JSON.stringify( arrayCarrito ))
      }
     
    }
   
  })
}



document.addEventListener('DOMContentLoaded', async () => {
  let products = await getAllProducts()
  console.log(products);
  let productosDestacados = products.filter( (elemento) => elemento.destacado === true)
  htmlCards(productosDestacados)
})







// let productos =  htmlCards(productosDestacados)
// containerProducts.append(productos)
// console.log(productos);