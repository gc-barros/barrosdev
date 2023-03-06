function getYearsInit() {
  const spanIdade = document.querySelector('[data-idade]');
  const spanAnoAtual = document.querySelector('[data-anoAtual]');

  const anoAtual = new Date().getFullYear();
  const mesAtual = new Date().getMonth();
  const diaAtual = new Date().getDate();

  let idadeAtual = anoAtual - 1 - 2000;
  
  if (mesAtual > 0 || diaAtual >= 8) {
    idadeAtual++;
  }

  spanIdade.innerHTML = idadeAtual + ' anos';
  spanAnoAtual.innerHTML = anoAtual;
}

export default getYearsInit;