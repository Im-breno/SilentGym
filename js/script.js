'use strict'

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
    containerNovoExercicioEl.classList.toggle("oculto")
})


let NomeExEl = document.querySelector('#inserirnome');
let nRepExEl = document.querySelector('#nrep');
let cargaExEl = document.querySelector('#kg');

let botaoFecharEl = document.querySelector('#fecharNE');

botaoFecharEl.addEventListener('click', ()=> {
    let nome = NomeExEl.value;
    let nRep = nRepExEl.value;
    let carga = cargaExEl.value;

    let listaExEl = document.querySelector('#listaexercicios');

    let divExEl = document.createElement('div');
    divExEl.classList.add('exercicio'); // Cria a div do exercicio novo
    listaExEl.appendChild(divExEl);

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
    divEditarExEl.classList.add('editarexercicio'); //! adicionar a classe oculto dps
    divEditarExEl.classList.add('oculto');
    divExEl.appendChild(divEditarExEl);  //adiciona a div do editar

    let botaoExcluir = document.createElement('button');
    botaoExcluir.type = 'button';
    botaoExcluir.classList.add('excluirEx');
    divEditarExEl.appendChild(botaoExcluir);

    let imgExcluir = document.createElement('img');
    imgExcluir.alt = 'Excluir foto';
    imgExcluir.src = 'img/apagarfotoicone.png';
    botaoExcluir.appendChild(imgExcluir);

    let botaoEditar = document.createElement('button');
    botaoEditar.type = 'button';
    botaoEditar.classList.add('editarEx');
    divEditarExEl.appendChild(botaoEditar);

    let imgEditar = document.createElement('img');
    imgEditar.alt = 'Editar foto';
    imgEditar.src = 'img/editarExicone.png';
    botaoEditar.appendChild(imgEditar);
})

//fazer função para zerar as informações do editar exercicio