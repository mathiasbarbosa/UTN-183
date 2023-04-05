
const arrayCarrito = []

const containerProducts = document.querySelector('#containerProducts')


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

      // html += `                         <div class= 'producto'>
                                     
      //                                   <img src=${elemento.imagen} alt="producto">
      //                                   <h3>${elemento.nombre}</h3>
      //                                   <p>${elemento.descripcion}</p>
      //                                   <p>${elemento.precio}</p>
      //                                   <a href="#">Ver más</a>
      //                                   <button class="btn">Añadir al carrito</button>
      //                             </div>
      // `
    
      divProduct.append(boton)
     fragment.append(divProduct)
      addToCart(boton)
      
    })

    // return fragment
    // containerProducts.innerHTML = html
    containerProducts.append(fragment)

}


function addToCart(boton){

  boton.addEventListener('click', function(evento){
    // console.log(evento);
    // console.dir(evento.target);
    // console.dir(evento.target.parentNode);
    // console.dir(evento.target.parentNode.children[1].innerText);
    // alert('Producto agregado al carrito')

    let id = evento.target.id
    console.log(id);
    id = id.slice(9)
    console.log(id);
    let busqueda =  productosInformaticos.find( elemento =>  elemento.id == id )
    console.log(busqueda);
    arrayCarrito.push(busqueda)
    console.log(arrayCarrito);
  })
}



// for (let i = 0; i < productosInformaticos.length; i++) {
  
//   if (productosInformaticos[i].destacado == true) {
//     htmlCards()
//   }
  
// }


let productosDestacados = productosInformaticos.filter( (elemento) => elemento.destacado === true)

htmlCards(productosDestacados)


// let productos =  htmlCards(productosDestacados)
// containerProducts.append(productos)
// console.log(productos);