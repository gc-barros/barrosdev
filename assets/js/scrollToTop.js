function scrollToTopInit() {
    const logo = document.querySelector("[data-logo]");
    const botaoTopo = document.querySelector("[data-scrollToTop]");

    // Temporizador do scroll
    let scrollTimer = -1;

    // Dispara a função ao scrollar a página
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        // Reseta o temporizador ao scrollar
        if (scrollTimer != -1) {
            clearTimeout(scrollTimer);
        }

        // Esconde o botão após 2500ms, se o scroll parar
        scrollTimer = window.setTimeout(hideButton, 2000);

        // Quando o usuário scrollar a página 2400px para baixo, exibe o botão
        if (
            document.body.scrollTop > 2400 ||
            document.documentElement.scrollTop > 2400
        ) {
            botaoTopo.style.display = "flex";
        } else {
            hideButton();
        }
    }

    // Evita que o botão suma enquanto o mouse estiver em cima dele
    botaoTopo.addEventListener("mouseover", () => {
        clearTimeout(scrollTimer);
    });

    // Esconder o botão
    function hideButton() {
        botaoTopo.style.display = "none";
    }

    function topFunction() {
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE e Opera
    }

    logo.addEventListener("click", topFunction);
    botaoTopo.addEventListener("click", topFunction);
}

export default scrollToTopInit;