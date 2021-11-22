var urlEnString = window.location.href; 
var urlDireccion = new URL(urlEnString);
var productId = urlDireccion.searchParams.get("prodId");
console.log("productID: " + productId);

'use strict'
const url = 'discos.json';
const request = new XMLHttpRequest();
request.open('GET', url); // setean el método, la url de api
request.responseType = 'json'; //definen el tipo de dato que les devuelve
request.send(); //envían la solicitud


var discos = '';
request.onload = function() {
    console.log(request.response);
    discos = request.response; //le asigno la respuesta a una variable global
    buscarElDisco();
}

function buscarElDisco() {
    let productos = discos.productos;
    productos.forEach(element => {
        
        if(element.id == productId){
            console.log(element);
            setDataDisc(element);
        }

    });
}

function setDataDisc(discinfo) {
    let titulo = document.getElementById("disc-name");
    let banda = document.getElementById("band");
    let foto = document.getElementById("foto-principal");
    titulo.innerHTML = discinfo.titulo;
    banda.innerHTML = discinfo.artista;
    foto.src = discinfo.tapa;
}