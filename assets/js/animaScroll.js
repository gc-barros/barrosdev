function animaScrollInit() {
    const target = document.querySelectorAll("[data-anima]");
    const animationClass = "animate";
    const typingClass = "digitando";
    
    if (target.length) {
        window.addEventListener("scroll", function () {
            animaScroll();
        });
    }
    
    function animaScroll() {
        const windowMetade = window.innerHeight * 0.7;
    
        target.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const isElementVisible = elementTop - windowMetade < 0;
            const typingElement = element.dataset.anima == "typing";
    
            if (isElementVisible) {
                if (typingElement) {
                    element.classList.add(typingClass);
                }
                element.classList.add(animationClass);
            } else {
                if (typingElement) {
                    element.classList.remove(typingClass);
                }
                element.classList.remove(animationClass);
            }
        });
    }
    
    animaScroll();
}

export default animaScrollInit;

