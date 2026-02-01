'use strict'

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

//! **após fazer o layout do exercicio, criar o codigo para Salvar.**

//* Preview da Imagem
let previewInputEl = document.querySelector("#fotoInput"); // Botao que adiciona a imagem
let imgPreviewEl = document.querySelector('#previewimg');// Preview da imagem
let botaoApagarImgEl = document.querySelector('#botaoapagarfoto'); //Botao que apaga foto

function AlternaBotaoApagarImg(){
    botaoApagarImgEl.classList.toggle('oculto');
}   //alterna o estado de visibilidade do botao de apagar a foto

function previewImportar (e){
    imgPreviewEl.src = URL.createObjectURL(e.target.files[0]); //importa a imagem
    AlternaBotaoApagarImg(); //deixa o botao de apagar visíveç
}

function previewImportarRemover(){
    imgPreviewEl.src = ''   //exclui a imagem
    AlternaBotaoApagarImg();    //some com o botao de apagar imagem
}

previewInputEl.addEventListener('change', previewImportar); //evento pro upload da imagem

botaoApagarImgEl.addEventListener('click', previewImportarRemover); //evento pra remover a imagem