let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1
let width = sliderIndividual[0].clientWidth
let intervalo = 6000

// Cambio de tamaño para dis´positivos moviles
window.addEventListener( 'resize' , () => {
    width = sliderIndividual[0].clientWidth
})

setInterval(()=> {
    slides()
},intervalo)

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)"
    slider.style.transition = "transform .8s"
    contador++
    if( contador == sliderIndividual.length ){
        setTimeout( ()=>{
            slider.style.transform = "translate(0px)"
            slider.style.transition = "transform 0s"
            contador=1
        },1500)
    }
}