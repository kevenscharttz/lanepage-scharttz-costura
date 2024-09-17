/* CONFIGURAÇÃO PARA BARRA DE NAVEGAÇÃO MOBILE */ 

var navLinks = document.getElementById("navLinks"); // Seleciona o elemento com o ID "navLinks"

function showMenu(){ // Define a função para mostrar o menu
    navLinks.style.right = "0"; // Define a posição do menu para a direita como 0
}

function hideMenu(){ // Define a função para esconder o menu
    navLinks.style.right = "-200px"; // Define a posição do menu para a direita como -200px
}

/* CONFIGURAÇÃO PARA BARRA DE NAVEGAÇÃO MOBILE */ 

/* CONFIGURAÇÃO PARA O CAROUSEL */ 

const imgMoldura = document.getElementById('moldura'); // Seleciona o elemento com o ID "moldura"
const btnAvancar = document.getElementById('btnAvancar'); // Seleciona o botão de avançar com o ID "btnAvancar"
const btnVoltar = document.getElementById('btnVoltar'); // Seleciona o botão de voltar com o ID "btnVoltar"

const imagens = [ // Define um array com URLs das imagens
    './img/peca-de-roupa (1).jpeg',
    './img/peca-de-roupa (2).jpeg',
    './img/peca-de-roupa (3).jpeg',
    './img/peca-de-roupa (4).jpeg'
];

let indiceAtual = 0; // Inicializa a variável para o índice da imagem atual

function avancarImagem() { // Define a função para avançar para a próxima imagem
    indiceAtual++; // Incrementa o índice atual
    if (indiceAtual >= imagens.length) { // Verifica se o índice atual é maior ou igual ao número de imagens
        indiceAtual = 0; // Volta para a primeira imagem se o índice for maior ou igual ao número de imagens
    }
    atualizarImagem(); // Chama a função para atualizar a imagem exibida
}

function voltarImagem() { // Define a função para voltar para a imagem anterior
    indiceAtual--; // Decrementa o índice atual
    if (indiceAtual < 0) { // Verifica se o índice atual é menor que zero
        indiceAtual = imagens.length - 1; // Vai para a última imagem se o índice for menor que zero
    }
    atualizarImagem(); // Chama a função para atualizar a imagem exibida
}

function atualizarImagem() { // Define a função para atualizar a imagem exibida
    imgMoldura.src = imagens[indiceAtual]; // Define o atributo src da imagem com a URL da imagem atual
}

btnAvancar.addEventListener('click', avancarImagem); // Adiciona um ouvinte de evento para o botão de avançar
btnVoltar.addEventListener('click', voltarImagem); // Adiciona um ouvinte de evento para o botão de voltar

atualizarImagem(); // Chama a função para exibir a imagem inicial

/* CONFIGURAÇÃO PARA O CAROUSEL */ 