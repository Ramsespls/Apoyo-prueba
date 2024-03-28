/*Toggle cards */
document.addEventListener("DOMContentLoaded", function() {
    const toggleElements = document.querySelectorAll(".toggle-p");

    toggleElements.forEach(function(element) {
        element.addEventListener("click", function() {
            const paragraph = this.nextElementSibling;
            paragraph.classList.toggle("d-none");
        });
    });
});

/*Smooth Scroll */
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".navbar-nav a");

    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});