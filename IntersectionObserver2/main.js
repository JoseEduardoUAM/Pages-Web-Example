const imagenes = document.querySelectorAll('.imagenes')

const observer = new IntersectionObserver( entries => {
    entries.forEach( entry => {
        entry.target.classList.toggle( "show" , entry.isIntersecting )
    })
}, {
    threshold: 1
})

imagenes.forEach( imagen => {
    observer.observe( imagen )
})