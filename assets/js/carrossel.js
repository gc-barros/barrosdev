function carrosselInit() {
  const botaoAnterior = "[data-botao-anterior]";
  const botaoProximo = "[data-botao-proximo]";
  const listaProjetos = "[data-carrossel]";
  const navegacao = "[data-navegacao]";
  const titulo = "[data-projeto='titulo']";
  const link = "[data-projeto='link']";
  const detalhes = "[data-projeto='detalhes']";
  const techs = "[data-projeto='techs']";
  const botaoVisitar = "[data-botao='visitar']";
  const botaoRepositorio = "[data-botao='repositorio']";

  const dados = {
    projetos: [
      {
        titulo: "Aluracord Bulbasaur",
        link: "https://aluracord-bulbasaur.vercel.app/",
        repositorio: "https://github.com/gc-barros/aluracord-bulbasaur",
        detalhes:
          "Chat em tempo real, customizado com o tema Bulbasaur. Utilizando seu username do GitHub, com informações obtidas via REST API, cada usuário pode enviar e excluir suas próprias mensagens e figurinhas.",
        techs: ["HTML5", "CSS3", "JavaScript", "Next", "React", "Figma"],
      },
      {
        titulo: "Encurtalinks",
        link: "https://encurtalinks.vercel.app/",
        repositorio: "https://github.com/gc-barros/encurtalinks",
        detalhes:
          "Aplicação para encurtamento de links, utilizando a Bitly API. Além de encurtar e copiar links, o usuário também pode gerenciá-los na página 'meus links', com dados armazenados no localStorage do navegador.",
        techs: ["HTML5", "CSS3", "JavaScript", "React", "Figma"],
      },
      {
        titulo: "Cineperfil",
        link: "https://cineperfil.vercel.app/",
        repositorio: "https://github.com/gc-barros/cineperfil",
        detalhes:
          "Front-end em React, desenvolvido para obtenção de nota na disciplina de Desenvolvimento de Sistemas Web (BICT/UFMA). Crie o seu perfil, gerencie seus filmes, séries e animes favoritos expressando sua opinião.",
        techs: ["HTML5", "Sass", "TypeScript", "React", "Figma"],
      },
      {
        titulo: "Ballerini Devs",
        link: "https://ballerinidevs-gabito.netlify.app/",
        repositorio: "https://github.com/gc-barros/ballerini-devs",
        detalhes:
          "Desafio da Tech da Semana: React, proposto pela Comunidade Ballerini. Trata-se de um sistema de cadastro e gerenciamento de devs, com dados armazenados no localStorage e conexão com GitHub API.",
        techs: ["HTML5", "CSS3", "JavaScript", "React", "Figma"],
      },
      {
        titulo: "Mais Inova",
        link: "https://maisinova.vercel.app/",
        repositorio: "https://github.com/gc-barros/mais-inova",
        detalhes:
          "Projeto desenvolvido em equipe, durante o 2° desafio integrado do Programa Trilhas, cujo tema era Mercado Financeiro. O site aborda a temática ESG e possui um quiz interativo que identifica o tipo de perfil do investidor.",
        techs: ["HTML5", "CSS3", "JavaScript", "Figma", "Trello"],
      },
      {
        titulo: "Blue Wand",
        link: "https://bluewand.vercel.app/",
        repositorio: "https://github.com/gc-barros/blue-wand",
        detalhes:
          "Landing page da Blue Wand, um grupo 100% maranhense de apoio a homens acometidos por câncer de pênis. Projeto desenvolvido em grupo, durante o primeiro desafio integrado do Programa Trilhas (Inova Maranhão).",
        techs: ["HTML5", "CSS3", "JavaScript", "Figma", "Trello"],
      },
      {
        titulo: "Por Elas",
        link: "https://porelas.ong.br/",
        repositorio: "https://github.com/gc-barros/por-elas",
        detalhes:
          "Website do Por Elas, um projeto fantástico que mobiliza pessoas e realiza ações para mulheres em São Luís – MA. Landing page construída por um grupo de programadores do Programa Trilhas (Inova Maranhão).",
        techs: ["HTML5", "CSS3", "JavaScript", "Figma", "Trello"],
      },
      {
        titulo: "Éguas, Siow!",
        link: "https://eguassiow.netlify.app/",
        repositorio: "https://github.com/gc-barros/2-workshop-trilhas",
        detalhes:
          "Website desenvolvido de forma individual, durante o 1º Workshop Trilhas, com o objetivo de promover a cultura do Estado do Maranhão, exaltando as suas belezas, encantos e diversidade, através de um site atrativo.",
        techs: ["HTML5", "CSS3", "JavaScript", "Figma"],
      },
      {
        titulo: "Pet Planet",
        link: "https://petplanet.netlify.app/",
        repositorio: "https://github.com/gc-barros/pet-planet",
        detalhes:
          'Projeto de uma clínica petshop fictícia, com telas de início, quem somos, serviços, fale conosco, login e cadastro. Desenvolvido em grupo, durante a disciplina de "Projeto e Desenvolvimento de Software" (front-end).',
        techs: ["HTML5", "CSS3", "JavaScript", "Figma"],
      },
      /*
      {
        titulo: "Pet Planet | Usuário",
        link: "https://petplanet.netlify.app/07-user-page.html/",
        repositorio: "https://github.com/gc-barros/pet-planet",
        detalhes:
          "Páginas internas da clínica Pet Planet, para as quais os usuários seriam direcionados após o login e cadastro, com acesso a telas navegáveis de início, produtos, serviços e agenda (back-end não integrado).",
        techs: ["HTML5", "CSS3", "JavaScript", "Figma"],
      },
      */
    ],
  };

  let carrossel = new Carousel(
    botaoAnterior,
    botaoProximo,
    listaProjetos,
    navegacao,
    titulo,
    link,
    detalhes,
    techs,
    dados,
    botaoVisitar,
    botaoRepositorio
  );

  carrossel.preparaSlides();
}

export default carrosselInit;

class Carousel {
  constructor(
    anterior,
    proximo,
    listaProdutos,
    navegacao,
    titulo,
    link,
    detalhes,
    techs,
    dados,
    botaoVisitar,
    botaoRepositorio
  ) {
    this.anterior = document.querySelector(anterior);
    this.proximo = document.querySelector(proximo);
    this.listaProdutos = document.querySelector(listaProdutos);
    this.navegacao = document.querySelector(navegacao);

    this.titulo = document.querySelector(titulo);
    this.link = document.querySelector(link);
    this.detalhes = document.querySelector(detalhes);
    this.techs = document.querySelector(techs);
    this.dados = dados;

    this.botaoVisitar = document.querySelector(botaoVisitar);
    this.botaoRepositorio = document.querySelector(botaoRepositorio);

    this.slides = this.getListaSlides();
    this.indicadores = this.getListaIndicadores();

    setTimeout(() => {      
      this.tamanhoSlide = this.getTamanhoSlide();
  
      this.indiceDoSlideAtual = 0;
  
      this.proximo.addEventListener("click", this.proximoSlide.bind(this));
      this.anterior.addEventListener("click", this.slideAnterior.bind(this));
  
      this.navegacao.addEventListener("click", this.pularParaSlide.bind(this));
  
      this.preparaSlides();
      this.renderizarDescricao();
    }, 1000)
  }

  getListaSlides() {
    return Array.from(this.listaProdutos.children);
  }

  getListaIndicadores() {
    return Array.from(this.navegacao.children);
  }

  getTamanhoSlide() {
    return this.slides[0].offsetWidth !== 0
      ? this.slides[0].offsetWidth
      : this.slides[0].getBoundingClientRect().width;
  }

  getSlideAtual() {
    return this.slides[this.indiceDoSlideAtual];
  }

  proximoSlide() {
    let proximaPosicao = this.indiceDoSlideAtual + 1;
    if (proximaPosicao > this.slides.length - 1) {
      proximaPosicao = 0;
    }

    this.vaParaSlide(proximaPosicao);
  }

  slideAnterior() {
    let posicaoAnterior = this.indiceDoSlideAtual - 1;
    if (posicaoAnterior < 0) {
      posicaoAnterior = this.slides.length - 1;
    }

    this.vaParaSlide(posicaoAnterior);
  }

  getIndiceAtual() {
    return this.indicadores[this.indiceDoSlideAtual];
  }

  vaParaSlide(posicao) {
    const indicadorAtual = this.getIndiceAtual();
    this.indiceDoSlideAtual = posicao;
    const indicadorSelecionado = this.getIndiceAtual();

    this.scrollParaSlide(this.getSlideAtual());
    this.atualizaIndicadores(indicadorAtual, indicadorSelecionado);

    this.renderizarDescricao();
  }

  scrollParaSlide(slideSelecionado) {
    this.listaProdutos.style.transform =
      "translateX(-" + slideSelecionado.style.left + ")";
  }

  atualizaIndicadores(indicadorAtual, indicadorSelecionado) {
    indicadorAtual.classList.remove("carousel__indicador--ativo");
    indicadorSelecionado.classList.add("carousel__indicador--ativo");
  }

  pularParaSlide(evento) {
    if (evento.target === evento.currentTarget) return;

    const indicadorSelecionado = evento.target.getAttribute("data-indicador");
    this.vaParaSlide(parseInt(indicadorSelecionado));
  }

  preparaSlides() {
    if (this.tamanhoSlide != 0) {
      this.slides.forEach((slide, i) => {
        slide.style.left = this.tamanhoSlide * i + "px";
      });
    } else {
      this.tamanhoSlide = this.getTamanhoSlide();
      document.location.reload()
    }
  }

  renderizarDescricao() {
    let i = this.indiceDoSlideAtual;
    let linkProjeto = this.dados.projetos[i].link;
    let linkRepositorio = this.dados.projetos[i].repositorio;

    this.titulo.innerText = this.dados.projetos[i].titulo;
    this.link.innerText = linkProjeto;
    this.link.setAttribute("href", linkProjeto);
    this.detalhes.innerText = this.dados.projetos[i].detalhes;

    this.carregarTechs(this.techs, i);

    this.botaoVisitar.setAttribute(
      "onclick",
      `window.open('${linkProjeto}', '_blank');`
    );
    this.botaoRepositorio.setAttribute(
      "onclick",
      `window.open('${linkRepositorio}', '_blank');`
    );
  }

  carregarTechs(techs, i) {
    // Techs do projeto atual
    const techsProject = this.dados.projetos[i].techs;
    // Todas as techs
    const techCollection = techs.children;
    const techList = [...techCollection];

    techList.forEach((tech) => {
        const techTitle = tech.getAttribute('title');
        tech.classList.add("projetos__techs--disabled");

        if (techsProject.includes(techTitle)) {
            tech.classList.remove("projetos__techs--disabled");
        } 
    });

  }
}
