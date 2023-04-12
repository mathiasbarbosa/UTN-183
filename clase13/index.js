// fetch(url, [options])
// fetch(url)

const main = document.querySelector('#root')
const btns = document.querySelectorAll('.containerBtns button')

// console.log(fetch('https://rickandmortyapi.com/api/character'));    
fetch('https://rickandmortyapi.com/api/character')
    .then( (response) => {
        console.log(response);
        if (response.status !== 200) {
            throw new Error(response.status)
        }
        return response.json() 
        })
    .then( (data) => html(data.results))
    .catch((error) => alert('error en la solicitud ' + error))



const html = (array) => {

    main.innerHTML = ''

    array.forEach(element => {
        main.innerHTML += `

                            <div>
                                <h3>Name: ${element.name}</h3>
                                <p>Species ${element.species}</p>
                                <img src=${element.image} alt="${element.name}">
                            </div>

        
        `
    });
}

const getAllCharacterPage = async (page) => {
    try {
        let response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        if (response.status !== 200) {
            throw new Error(response.status)
        }
        let data = await  response.json()
        console.log(data);
        html(data.results)
    } catch (error) {
        alert('error en la solicitud ' + error)
    }
}


const eventBtnPage = (btn) => {
    btn.addEventListener('click', (event) => {
        console.log(event.target.innerText);
        let page = event.target.innerText
        getAllCharacterPage(page)
    })
}


const collectionBtns = (btns) => {
    for (const btn of btns) {
        eventBtnPage(btn)
    }
}

collectionBtns(btns)