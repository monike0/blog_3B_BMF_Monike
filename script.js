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
    })
}