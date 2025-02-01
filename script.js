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

// Detectar elementos com a classe "scroll-animate"
const scrollElements = document.querySelectorAll(".scroll-animate");

// Função para verificar se o elemento está na viewport
const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight && // O topo do elemento está dentro da altura da viewport
        rect.bottom >= 0 // O fundo do elemento está acima do final da viewport
    );
};

// Função para animar os elementos na viewport
const scrollHandler = () => {
    scrollElements.forEach((el) => {
        if (isElementInViewport(el)) {
            el.classList.add("animate");
        }
    });
};

// Escutar o evento de scroll
window.addEventListener("scroll", scrollHandler);

// Garantir que funcione também no carregamento inicial
window.addEventListener("load", scrollHandler);
