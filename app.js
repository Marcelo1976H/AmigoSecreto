//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
let numeroEscolhido = 0;
let nomeAmigos = "";

function TextoInicial(){
    TextoResultado('h2','Digite o nome dos seus amigos')
}

function TextoResultado(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
let nomeAmigos = document.querySelector('input').value;
    listaAmigos.push(nomeAmigos.trim());
    limparCampo();
};

function limparCampo() {
    nomeAmigos = document.querySelector('input');
    nomeAmigos.value = '';
}

function sortearAmigo() {
if (listaAmigos.length === 0) {
    alert ("Digite um nome válido!");
    return;
}
   let numeroEscolhido = Math.floor(Math.random() * listaAmigos.length);
   let nomeEscolhido = listaAmigos [numeroEscolhido];
   TextoResultado('h2',`O nome sorteado é: ${nomeEscolhido}`);
}

function reiniciarSorteio() {
    TextoInicial();
    listaAmigos = [];
    }
