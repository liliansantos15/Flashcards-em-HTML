// pergunta.js

// A função foi corrigida e todo o código HTML/lógica está DENTRO dela.
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    // O innerHTML foi movido para DENTRO da função, usando as variáveis corretas.
    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    // A lógica de virar o cartão também está dentro da função.
    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        // Usei 'cartao' aqui dentro, pois ele foi declarado no início da função.
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    // Adiciona o evento de clique e insere o cartão no container.
    cartao.addEventListener('click', viraCartao);
    container.appendChild(cartao);
}
