document.addEventListener("DOMContentLoaded", () => {
    prepararReacoes();
    prepararModoEscuro();
});

// Lógica para alternar Modo Escuro
function prepararModoEscuro() {
    const btnTema = document.getElementById("toggle-theme");
    if (btnTema) {
        btnTema.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }
}

// Lógica das curtidas salvas no navegador (localStorage)
function prepararReacoes() {
    const artigos = document.querySelectorAll("article");

    artigos.forEach((artigo, indice) => {
        const botoes = artigo.querySelectorAll(".btn-curtir");
        if (botoes.length < 3) return;

        const botaoUM = botoes[0];
        const botaoDOIS = botoes[1];
        const botaoTRES = botoes[2];

        const contadorBotaoUM = botaoUM.querySelector(".contador");
        const contadorBotaoDOIS = botaoDOIS.querySelector(".contador");
        const contadorBotaoTRES = botaoTRES.querySelector(".contador");

        const idCard = `card-${indice + 1}`;
        const chaveBotaoUM = `${idCard}-botaoUM`;
        const chaveBotaoDOIS = `${idCard}-botaoDOIS`;
        const chaveBotaoTRES = `${idCard}-botaoTRES`;

        let UM = Number(localStorage.getItem(chaveBotaoUM)) || 0;
        let DOIS = Number(localStorage.getItem(chaveBotaoDOIS)) || 0;
        let TRES = Number(localStorage.getItem(chaveBotaoTRES)) || 0;

        contadorBotaoUM.textContent = UM;
        contadorBotaoDOIS.textContent = DOIS;
        contadorBotaoTRES.textContent = TRES;

        botaoUM.addEventListener("click", () => {
            UM++;
            contadorBotaoUM.textContent = UM;
            localStorage.setItem(chaveBotaoUM, UM);
        });

        botaoDOIS.addEventListener("click", () => {
            DOIS++;
            contadorBotaoDOIS.textContent = DOIS;
            localStorage.setItem(chaveBotaoDOIS, DOIS);
        });

        botaoTRES.addEventListener("click", () => {
            TRES++;
            contadorBotaoTRES.textContent = TRES;
            localStorage.setItem(chaveBotaoTRES, TRES);
        });
    });
}