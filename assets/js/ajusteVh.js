function ajusteVhInit() {

    function ajustarVh() {
        let vh = window.innerHeight * 0.01;
        
        // Configura o valor em --vh na raiz do documento
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    ajustarVh();
    
    window.onload = ajustarVh();
    window.addEventListener("resize", ajustarVh());
}

export default ajusteVhInit;
