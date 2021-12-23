function linksInternosInit() {
    const botaoContato = document.querySelectorAll("[data-botao='contato']");
    const botaoSobre = document.querySelectorAll("[data-botao='sobre']");
    const botaoProjetos = document.querySelectorAll("[data-botao='projetos']");
    const botaoHabilidades = document.querySelectorAll("[data-botao='habilidades']");

    const sectionContato = document.getElementById('contato');
    const sectionSobre = document.getElementById('sobre');
    const sectionProjetos = document.getElementById('projetos');
    const sectionHabilidades = document.getElementById('habilidades');

    botaoSobre.forEach((botao) => {
        botao.addEventListener(
            "click", (event) => {
                event.preventDefault();
                scrollToIdOnClick(sectionSobre.offsetTop - 50);
            }
        );
    });
        
    botaoProjetos.forEach((botao) => {
        botao.addEventListener(
            "click", (event) => {
                event.preventDefault();
                scrollToIdOnClick(sectionProjetos.offsetTop - 50);
            }
        );
    });
            
    botaoContato.forEach((botao) => {
        botao.addEventListener(
            "click", (event) => {
                event.preventDefault();
                scrollToIdOnClick(sectionContato.offsetTop + 40);
            }
        );
    });

    botaoHabilidades.forEach((botao) => {
        botao.addEventListener("click", (event) => {
            event.preventDefault();
            scrollToIdOnClick(sectionHabilidades.offsetTop - 50);
        });
    });

    function scrollToIdOnClick(sectionHeight) {
        document.body.scrollTop = sectionHeight; // Safari
        document.documentElement.scrollTop = sectionHeight; // Chrome, Firefox, IE e Opera
    }
}

export default linksInternosInit;