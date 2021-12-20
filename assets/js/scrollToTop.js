function scrollToTopInit() {
    const logo = document.querySelector("[data-logo]");
    
    function topFunction() {
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE e Opera
    }
    
    logo.addEventListener('click', topFunction);
}

export default scrollToTopInit;