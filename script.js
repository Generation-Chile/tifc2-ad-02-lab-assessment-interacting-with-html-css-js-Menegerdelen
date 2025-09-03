

const titulo = document.querySelector('#titulo')

const decirAdios = () => {
    setTimeout(() =>{
        titulo.innerHTML = 'Adios'
    }, 5000)
}
decirAdios()

const cambiarColorNaranja = () => {
    titulo.style.color="orange" 
}
cambiarColorNaranja()


const h1Marron = document.querySelector('#marron')
const cambiarMarron = () => {
    h1Marron.style.color='brown'
}

