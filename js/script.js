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
let previewLinkEl = document.querySelectorAll('.linkfoto')// Link que adiciona a foto
let previewInputEl = document.querySelector("#fotoInput"); // Botao que adiciona a imagem
let imgPreviewEl = document.querySelector('#previewimg');// Preview da imagem


function previewLink(e){
    imgPreviewEl.src = previewLinkEl.values
}

function previewImportar (e){
    imgPreviewEl.src = URL.createObjectURL(e.target.files[0]);
}

previewInputEl.addEventListener('change', previewImportar);
previewLinkEl.addEventListener('change', previewLink)