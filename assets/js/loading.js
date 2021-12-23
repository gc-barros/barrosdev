function loadingInit() {
    window.onload = () => {
        const loading = document.querySelector('.loading');

        setTimeout(() => {
            loading.classList.add('loading-disabled');
        }, 2000)
    }
}

export default loadingInit;