// Garantir que o container do carrossel seja animado ao carregar a página
window.addEventListener("load", () => {
    const carousel = document.getElementById("carousel");
    carousel.classList.add("animate");
});

// Inicializa o índice do slide
let slideIndex = 1;
showSlides(slideIndex);

// Função para mudar de slide manualmente
function moveSlide(n) {
    showSlides(slideIndex += n);
}

// Função para mostrar o slide atual
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Configuração para mudança automática dos slides
setInterval(function() {
    moveSlide(1);
}, 5000);
