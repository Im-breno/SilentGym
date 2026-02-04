'use strict'

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
} //*Verifica se é mobile

//* Preview da Imagem
let previewInputEl = document.querySelector("#fotoInput"); // Botao que adiciona a imagem

let imgPreviewEl = document.querySelector('#previewimg');// Preview da imagem

let botaoApagarImgEl = document.querySelector('#botaoapagarfoto'); //Botao que apaga foto
let urlImgAtual

function AlternaBotaoApagarImg(){
    botaoApagarImgEl.classList.toggle('oculto');
}   //alterna o estado de visibilidade do botao de apagar a foto

function previewImportar (e){
    urlImgAtual = URL.createObjectURL(e.target.files[0])
    imgPreviewEl.src = urlImgAtual; //importa a imagem
    AlternaBotaoApagarImg(); //deixa o botao de apagar visíveç
}

function previewImportarRemover(){
    imgPreviewEl.src = ''   //exclui a imagem
    AlternaBotaoApagarImg();    //some com o botao de apagar imagem
}

previewInputEl.addEventListener('change', previewImportar); //evento pro upload da imagem

botaoApagarImgEl.addEventListener('click', previewImportarRemover); //evento pra remover a imagem



//* Faz aparecer e sumir a aba de configurar exercicio

let addExercicioBotaoEl = document.querySelector("#addexercicio"); //Botao de criar exercicio

let containerNovoExercicioEl = document.querySelector("#containernovoexercicio"); // Container de criar novo exercicio

addExercicioBotaoEl.addEventListener('click', ()=>{
    containerNovoExercicioEl.classList.toggle("oculto")
}) // Faz o container de criar novo execicio aparecer;

let fundoPretoEl = document.querySelector("#fundopreto"); // Elemento do fundo preto

fundoPretoEl.addEventListener('click', ()=>{
    if (estaEditando) {
        criaExercicio();
        // criaExercicio já faz um toggle; garantir que a aba fique escondida
        containerNovoExercicioEl.classList.add("oculto");
        return;
    }
    containerNovoExercicioEl.classList.toggle("oculto");
})
let listaExEl = document.querySelector('#listaexercicios'); // container da lista

const exerciciosEl = listaExEl.children; //Os exercicios colocados vao estar aqui;

let editarExercicioEl = document.querySelectorAll('.editarexercicio');

// Estado para edição: guarda o nextSibling para re-inserir no mesmo local
let estaEditando = false;
let editaProximoSibling = null;

let NomeExEl = document.querySelector('#inserirnome');
let nRepExEl = document.querySelector('#nrep');
let cargaExEl = document.querySelector('#kg');

let botaoFecharEl = document.querySelector('#fecharNE');

function criaExercicio(){
    let nome = NomeExEl.value;
    let nRep = nRepExEl.value;
    let carga = cargaExEl.value;

    let divExEl = document.createElement('div');
    divExEl.classList.add('exercicio'); // Cria a div do exercicio novo

    if (estaEditando) {
        if (editaProximoSibling) listaExEl.insertBefore(divExEl, editaProximoSibling);
        else listaExEl.appendChild(divExEl);
        estaEditando = false;
        editaProximoSibling = null;
    } else {
        listaExEl.appendChild(divExEl);
    }

    let divImgExEl = document.createElement('div');
    divImgExEl.classList.add('imgEx'); // Cria a div da imagem
    divExEl.appendChild(divImgExEl);

    let imgExEl = document.createElement('img');
    imgExEl.classList.add('imgexercicio');
    imgExEl.src = urlImgAtual;  //Cria a imagem
    imgExEl.alt = 'imagem do exercicio';
    divImgExEl.appendChild(imgExEl);

    let divNomeExEl = document.createElement('div');
    divNomeExEl.classList.add('nomeEx'); //adiciona a div do nome
    divExEl.appendChild(divNomeExEl);

    let nomeH2El = document.createElement('h2');
    nomeH2El.textContent = 'Nome';  // titulo nome
    divNomeExEl.appendChild(nomeH2El)

    let nomePEl = document.createElement('p');
    nomePEl.textContent = nome; // Adiciona o nome
    divNomeExEl.appendChild(nomePEl);

    let divKgExEl = document.createElement('div');
    divKgExEl.classList.add('KgEx'); //adiciona a div do kg
    divExEl.appendChild(divKgExEl);

    let kgH2El = document.createElement('h2');
    kgH2El.textContent = 'Kg';  // titulo kg
    divKgExEl.appendChild(kgH2El)

    let kgPEl = document.createElement('p');
    kgPEl.textContent = carga; // Adiciona a carga
    divKgExEl.appendChild(kgPEl);

    let divRepExEl = document.createElement('div');
    divRepExEl.classList.add('RepEx'); //adiciona a div do rep
    divExEl.appendChild(divRepExEl);

    let repH2El = document.createElement('h2');
    repH2El.textContent = 'Rep.';  // titulo rep
    divRepExEl.appendChild(repH2El)

    let repPEl = document.createElement('p');
    repPEl.textContent = nRep; // Adiciona a rep
    divRepExEl.appendChild(repPEl);

    let divCheckBoxExEl = document.createElement('div');
    divCheckBoxExEl.classList.add('checkboxEx'); // Adiciona a div da checkbox
    divExEl.appendChild(divCheckBoxExEl);

    let checkBoxExEl = document.createElement('input');
    checkBoxExEl.type = "checkbox";
    checkBoxExEl.name = "checkboxEx";   // Adiciona a checkbox
    checkBoxExEl.classList.add('checkboxEx');
    divCheckBoxExEl.appendChild(checkBoxExEl);

    let divEditarExEl = document.createElement('div');
    divEditarExEl.classList.add('editarexercicio');
    divExEl.appendChild(divEditarExEl);  //adiciona a div do editar

    let botaoExcluir = document.createElement('button');
    botaoExcluir.type = 'button'; //cria o botao de excluir
    botaoExcluir.classList.add('excluirEx');
    divEditarExEl.appendChild(botaoExcluir);

    let imgExcluir = document.createElement('img');
    imgExcluir.alt = 'Excluir Exercicio'; // Cria a imagem do botao de excluir
    imgExcluir.src = 'img/apagarfotoicone.png';
    botaoExcluir.appendChild(imgExcluir);

    let botaoEditar = document.createElement('button');
    botaoEditar.type = 'button';    //Cria o botao de editar
    botaoEditar.classList.add('editarEx');
    divEditarExEl.appendChild(botaoEditar);

    let imgEditar = document.createElement('img');
    imgEditar.alt = 'Editar foto';  // Cria a imagem de do botao editar
    imgEditar.src = 'img/editarExicone.png';
    botaoEditar.appendChild(imgEditar);

    NomeExEl.value = '';
    nRepExEl.value = ''; // reseta as informações do editar imagem
    cargaExEl.value = '';

    previewImportarRemover();
    containerNovoExercicioEl.classList.toggle("oculto"); // Esconde a aba de gerenciar

    editarExercicioEl = document.querySelectorAll('.editarexercicio');
}

//* Cria um novo exercicio
botaoFecharEl.addEventListener('click', criaExercicio)
//* Cria um novo exercicio

    listaExEl.addEventListener('click', (e) => {
        const btnExcluir = e.target.closest('.excluirEx');
        if (!btnExcluir) return;
    
        const card = btnExcluir.closest('.exercicio');
        if (card) card.remove();
    });

    listaExEl.addEventListener('click', (e) => {
        const btnEditar = e.target.closest('.editarEx');
        if (!btnEditar) return;

        const exercicio = btnEditar.closest('.exercicio');
        if (!exercicio) return;

        const nomePEl = exercicio.querySelector('.nomeEx p');
        const kgPEl = exercicio.querySelector('.KgEx p');
        const repPEl = exercicio.querySelector('.RepEx p');
        const imgExEl = exercicio.querySelector('.imgexercicio');

        if (nomePEl) NomeExEl.value = nomePEl.textContent;
        if (kgPEl) cargaExEl.value = kgPEl.textContent;
        if (repPEl) nRepExEl.value = repPEl.textContent;

        // Guarda a posição para re-inserir no mesmo local
        editaProximoSibling = exercicio.nextElementSibling;
        estaEditando = true;

        // Usa a imagem do exercício para preview/para recriar
        if (imgExEl && imgExEl.src) {
            urlImgAtual = imgExEl.src;
            imgPreviewEl.src = urlImgAtual;
            botaoApagarImgEl.classList.remove('oculto');
        }

        containerNovoExercicioEl.classList.remove("oculto");
        exercicio.remove();
    });