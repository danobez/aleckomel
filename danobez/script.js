document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar ul li a");
    const currentPage = window.location.pathname;

    navLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.parentElement.classList.add("active");
        } else {
            link.parentElement.classList.remove("active");
        }
    });
});

const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    closeButton: true,
    zoomable: true,
    draggable: true,
    openEffect: 'zoom',
    closeEffect: 'fade',
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img");

    function showImages() {
        images.forEach((img, index) => {
            setTimeout(() => {
                img.classList.add("show");
            }, index * 200); // Задержка появления каждого изображения
        });
    }

    showImages();
});
