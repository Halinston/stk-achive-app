// script.js
document.addEventListener("DOMContentLoaded", function () {
    const imgElement = document.querySelector(".section-c img");

    function checkScroll() {
        const windowHeight = window.innerHeight;
        const imgPosition = imgElement.getBoundingClientRect().top;

        // If the image is within the viewport, make it appear
        if (imgPosition < windowHeight / 1.5) {
            imgElement.style.opacity = 1;
            imgElement.style.transform = "translateY(0)";
            window.removeEventListener("scroll", checkScroll); // Remove the event listener once the animation is triggered
        }
    }

    window.addEventListener("scroll", checkScroll);
});


