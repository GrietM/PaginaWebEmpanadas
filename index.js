window.addEventListener('DOMContentLoaded', () => {
    console.log ("la página está cargada")
    const button = document.querySelector('#click-me')
    console.log (button)
    button.addEventListener("click", () => {
        console.log ("Hiciste click en el boton!")
    })
})




