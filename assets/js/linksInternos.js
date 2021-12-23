function linksInternosInit() {
    const botaoContato = document.querySelectorAll("[data-botao='contato']");
    const botaoSobre = document.querySelectorAll("[data-botao='sobre']");
    const botaoProjetos = document.querySelectorAll("[data-botao='projetos']");

    const sectionContato = document.getElementById('contato');
    const sectionSobre = document.getElementById('sobre');
    const sectionProjetos = document.getElementById('projetos');

    botaoSobre.forEach((botao) => {
        botao.addEventListener(
            "click", () => {
                scrollToIdOnClick(sectionSobre)
            }
        );
    });

    botaoProjetos.forEach((botao) => {
        botao.addEventListener(
            "click", () => {
                scrollToIdOnClick(sectionProjetos)
            }
        );
    });

    botaoContato.forEach((botao) => {
        botao.addEventListener(
            "click", () => {
                scrollToIdOnClick(sectionContato)
            }
        );
    });

    function scrollToIdOnClick(section) {
        let sectionHeight = section.offsetTop - 40;
        document.body.scrollTop = sectionHeight; // Safari
        document.documentElement.scrollTop = sectionHeight; // Chrome, Firefox, IE e Opera
    }
}

export default linksInternosInit;