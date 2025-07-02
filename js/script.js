
// Script de base pour Mamos Crypto – interactions dynamiques

// Menu burger pour mobile (si menu collapsible à venir)
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    if (burger && navLinks) {
        burger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Lazy loading des images
    const lazyImages = document.querySelectorAll("img[data-src]");
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
                obs.unobserve(img);
            }
        });
    }, { threshold: 0.1 });

    lazyImages.forEach(img => observer.observe(img));
});
