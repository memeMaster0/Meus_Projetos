// Ajuste a responsividade do About-Us ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll(".about-us-item");

    if (window.innerWidth <= 768) {
        items.forEach(item => {
            item.style.width = "100%";
            item.style.height = "auto";
            item.style.marginBottom = "15px";
        });
    }
});

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

// Função para ajustar automaticamente os estilos conforme a largura da tela
function ajustarResponsividade() {
    let larguraTela = window.innerWidth;
    
    // Ajustes gerais para mobile
    if (larguraTela <= 768) {
        document.body.style.maxWidth = "500px";
        document.body.style.padding = "10px";

        // Header e Navegação
        document.querySelector("header").style.flexDirection = "column";
        document.querySelector("header").style.padding = "20px";
        document.querySelector("nav").style.display = "flex";
        document.querySelector("nav").style.flexDirection = "column";
        document.querySelector("nav").style.gap = "10px";

        // Ajustes no About-Us
        let aboutUsContainer = document.querySelector(".about-us-container");
        if (aboutUsContainer) {
            aboutUsContainer.style.width = "95%";
            aboutUsContainer.style.height = "auto";
            aboutUsContainer.style.margin = "20px auto";
            aboutUsContainer.style.padding = "10px";
            aboutUsContainer.style.borderRadius = "10px";
            aboutUsContainer.style.textAlign = "center";
        }

        // 📌 Código que você adicionou 📌
        let aboutUsSlide = document.querySelector(".about-us-slide");
        let aboutUsItems = document.querySelectorAll(".about-us-item");

        if (aboutUsSlide) {
            aboutUsSlide.style.display = "flex";
            aboutUsSlide.style.flexDirection = "column";
            aboutUsSlide.style.alignItems = "center";
        }

        aboutUsItems.forEach(item => {
            item.style.width = "90%";
            item.style.height = "auto";
            item.style.marginBottom = "10px";
            item.style.display = "flex";
            item.style.flexDirection = "column";
            item.style.alignItems = "center";
        });

        let aboutUsContent = document.querySelector(".about-us-content");
        if (aboutUsContent) {
            aboutUsContent.style.textAlign = "center";
            aboutUsContent.style.width = "90%";
            aboutUsContent.style.margin = "0 auto";
        }

        // Ajustes no carrossel principal
        let carouselImages = document.querySelectorAll(".carousel img");
        carouselImages.forEach(img => {
            img.style.width = "100%";
            img.style.height = "auto";
        });

        // Ajustes na seção de produtos
        let productsContainer = document.querySelector(".products-container");
        if (productsContainer) {
            productsContainer.style.flexDirection = "column";
            productsContainer.style.padding = "10px";
        }

        let productItems = document.querySelectorAll(".product");
        productItems.forEach(product => {
            product.style.maxWidth = "100%";
            product.style.width = "90%";
        });

        let productImages = document.querySelectorAll(".product img");
        productImages.forEach(img => {
            img.style.width = "100%";
            img.style.height = "auto";
        });

        let productTitles = document.querySelectorAll(".product h3");
        productTitles.forEach(title => {
            title.style.fontSize = "22px";
            title.style.padding = "10px";
            title.style.textAlign = "center";
        });
    } else {
        // Caso a tela seja maior que 768px, volta para o layout padrão
        document.body.style.padding = "0px";
        document.querySelector("header").style.flexDirection = "row";
        document.querySelector("header").style.padding = "50px";
        document.querySelector("nav").style.flexDirection = "row";

        let aboutUsContainer = document.querySelector(".about-us-container");
        if (aboutUsContainer) {
            aboutUsContainer.style.width = "500px";
            aboutUsContainer.style.height = "400px";
            aboutUsContainer.style.margin = "150px auto";
            aboutUsContainer.style.padding = "0px";
            aboutUsContainer.style.borderRadius = "20px";
        }

        let aboutUsItems = document.querySelectorAll(".about-us-item");
        aboutUsItems.forEach(item => {
            item.style.width = "500px";
            item.style.height = "500px";
            item.style.marginBottom = "0px";
        });

        let productItems = document.querySelectorAll(".product");
        productItems.forEach(product => {
            product.style.maxWidth = "300px";
            product.style.width = "auto";
        });

        let productTitles = document.querySelectorAll(".product h3");
        productTitles.forEach(title => {
            title.style.fontSize = "26px";
            title.style.textAlign = "left";
        });
    }
}

// Executa a função ao carregar a página
window.addEventListener("DOMContentLoaded", ajustarResponsividade);

// Adiciona um listener para ajustar os elementos sempre que a tela for redimensionada
window.addEventListener("resize", ajustarResponsividade);