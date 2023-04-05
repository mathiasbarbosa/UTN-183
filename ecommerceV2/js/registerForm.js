import { User } from "../models/user.class.js"


const form = document.querySelector('#registerForm')
const usersArray = [];


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
        window.location = '../index.html'
    }else{
        alert('Dale, ingresa bien los datos')
    }


    // let nombre = document.querySelector('inputNombre')
 
})