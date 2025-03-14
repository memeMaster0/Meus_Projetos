// Inicializa o carrossel
window.addEventListener("load", () => {
    const carousel = document.getElementById("carousel");
    if (carousel) carousel.classList.add("animate");
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
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

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
setInterval(() => {
    moveSlide(1);
}, 5000);

// Detectar elementos com a classe "scroll-animate"
const scrollElements = document.querySelectorAll(".scroll-animate");

// Usar Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate"); // Adiciona a animação
            observer.unobserve(entry.target); // Para de observar o elemento
        }
    });
}, {
    threshold: 0.15, // Só dispara quando 15% do elemento está visível
    rootMargin: "0px 0px -50px 0px", // Inicia a animação antes de o elemento estar totalmente visível
});

// Adicionar os elementos ao observer
scrollElements.forEach((el) => observer.observe(el));

// --- Função do botão "Voltar ao topo" ---

// Seleciona o botão
const backToTopButton = document.getElementById("backToTop");

// Mostra ou esconde o botão com base na rolagem
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // Exibe o botão quando rolar mais de 300px
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

// Rola suavemente para o topo ao clicar no botão
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Rola suavemente
    });
});

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
