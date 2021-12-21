function menuLateralInit() {
    const hamburguer = document.querySelector("[data-hamburguer]");
    const menu = document.querySelector("[data-menu]");

    hamburguer.addEventListener("click", () => {
        menu.classList.toggle("cabecalho__menu--ativo");
        hamburguer.classList.toggle("texto-gradient");
    });

    // Fecha o submenu ao clicar fora
    document.addEventListener("click", (evt) => {
        let targetElement = evt.target;

        if (targetElement != hamburguer && targetElement != menu) {
            menu.classList.remove("cabecalho__menu--ativo");
            hamburguer.classList.remove("texto-gradient");
        }
    });
}

export default menuLateralInit;

