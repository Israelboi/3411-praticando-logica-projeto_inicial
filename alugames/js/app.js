let jogosAlugados = 0;


function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if(botao.textContent === 'Alugar'){
        jogosAlugados++;
        botao.textContent = 'Devolver';
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
    }else{
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            botao.textContent = 'Alugar';
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            jogosAlugados--;
        }      
    }

    contarEExibirJogosAlugados();
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});


palavraEUmPalindromo();

function palavraEUmPalindromo(){
    let palavra = 'esse';
    let separaPalavra = palavra.split("");
    let invertePalavra = separaPalavra.reverse();
    let palavraInvertida = invertePalavra.join("");
    
    if(palavra === palavraInvertida){
        console.log(`A palavra ${palavra} é um palíndromo`);
    }
    else{
        console.log(`A palavra ${palavra} não é um palíndromo`);
    }
}


// function ordenacao(numeros){
//     console.log(numeros.sort())
// }

// var num1 = Number(prompt("Num1 -> "));
// var num2 = Number(prompt("Num3 -> "));
// var num3 = Number(prompt("Num3 -> "));

// numeros = [num1,num2,num3];

// ordenacao(numeros);

function ordenarNumeros(a, b, c, d) {
    const numerosOrdenados = [a, b, c,d].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

// Exemplo de uso:
ordenarNumeros(3, 1, 5, 2); // Deve exibir "Números ordenados: 1, 3, 5"
