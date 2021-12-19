function menuLateralInit() {
    const hamburguer = document.querySelector("[data-hamburguer]");
    const menu = document.querySelector("[data-menu]");
    
    hamburguer.addEventListener('click', () => {
        menu.classList.toggle('cabecalho__menu--ativo');
        hamburguer.classList.toggle('texto-gradient');
    });
}

export default menuLateralInit;

