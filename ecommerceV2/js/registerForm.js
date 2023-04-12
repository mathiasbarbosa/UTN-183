import { User } from "../models/user.class.js"


const form = document.querySelector('#registerForm')
const usersArray = [];


const postUser = async (user) => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify( user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    console.log(response);
    if (response.ok !== true) {
        throw new Error(response.status)
    }
    let data = await response.json()
    console.log(data);
  } catch (error) {
    alert('Error en la solicitud: ' + error)
  }
}



form.addEventListener('submit', (e) => {
    e.preventDefault()
    let formData = new FormData(form)
    let username = formData.get('username')
    let email = formData.get('email')
    let password = formData.get('password')
   
    if ((username !== '') && (email !== '') && (password !== '')) {
        let user = new User(username, email, password)
        console.log(user);
        usersArray.push(user)
        localStorage.setItem('users', JSON.stringify( usersArray) )
        // window.location = '../index.html'
        console.log(JSON.stringify(user));
        postUser(user)
    }else{
        alert('Dale, ingresa bien los datos')
    }


    // let nombre = document.querySelector('inputNombre')
 
})