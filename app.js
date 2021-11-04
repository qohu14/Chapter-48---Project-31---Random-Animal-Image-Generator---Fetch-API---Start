/*
Public API Repo
https://github.com/public-apis/public-apis
*/ 

"use strict"
const btnFox = document.querySelector(".get-fox");
const btnCat = document.querySelector(".get-cat");
const btnDog = document.querySelector(".get-dog");

const zorro = document.querySelector(".fox");
const gato = document.querySelector(".cat");
const perro = document.querySelector(".dog");

btnFox.addEventListener("click", function(e){
    e.preventDefault();
    fetch("https://randomfox.ca/floof/")
        .then(res => res.json())
        .then(imagenes => {
        zorro.innerHTML = `<td><img src="${imagenes.image}"></td>`;
        })
        .catch(error => console.log(error))
});

btnCat.addEventListener("click", function(e){
    e.preventDefault();
    fetch("https://aws.random.cat/meow")
        .then(res => res.json())
        .then(imagenes => {
        gato.innerHTML = `<td><img src="${imagenes.file}"></td>`;
        })
        .catch(error => console.log(error))
});

btnDog.addEventListener("click", function(e){
    e.preventDefault();
    fetch("https://random.dog/woof.json")
        .then(res => res.json())
        .then(imagenes => {  
        perro.innerHTML = `<td><img src="${imagenes.url}"></td>`;
        })
        .catch(error => console.log(error))
});