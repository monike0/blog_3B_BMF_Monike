document.addEventListener("DOMContentloaded", () =>{
prepararReacoes();
prepararAnimacaoCard();
criarBotaoTopo();
})

function prepararReacoes() {
    const artigos = document.queryselectorAll("article");

    artigos.forEach((artigo, indice) =>{
        const botoes = artigo.queryselectorAll("Button");
        if(botoes.leght < 2) {
            return;
        }
        const botaoUM = botoes[0];
        const botaoDOIS = botoes[1];

        const contadorBotaoUM = botaoUM.queryselector("span");
         const contadorBotaoDOIS = botaoDOIS.queryselector("span");

        const idCard = `card-${indice + 1}`;

        const chaveBotaoUM = `${idCard}-botaoUM`;
         const chaveBotaoUM = `${idCard}-botaoDOIS`;

    })
}