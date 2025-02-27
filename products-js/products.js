let next = document.querySelector('.about-us-next')
let prev = document.querySelector('.about-us-prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.about-us-item')
    document.querySelector('.about-us-slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.about-us-item')
    document.querySelector('.about-us-slide').prepend(items[items.length - 1]) // here the length of items = 6
})

document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault(); // Impede qualquer comportamento padrão
        let targetID = this.getAttribute("data-target"); // Obtém o ID do slider

        // Simula o clique no slider sem alterar a URL
        document.getElementById(targetID).classList.add("active");

        // Mantém a posição da página
        let scrollY = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, scrollY);
        }, 10);
    });
});
