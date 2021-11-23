const url = 'discos.json';
const request = new XMLHttpRequest();
request.open('GET', url); // setean el método, la url de api
request.responseType = 'json'; //definen el tipo de dato que les devuelve
request.send(); //envían la solicitud

var discos = '';

request.onload = function() {
    console.log(request.response);
    discos = request.response; //le asigno la respuesta a una variable global
    setTablaDestacados(); //para que aparezca determinada info de los destacados en las cards del home. 
}


/*function getData() {
    let url = "discos.json";
    $.getJSON(url, function(data) { //procesa el data y devuelve la info que sigue
            setTablaDestacados(data);
        })
        .done(function() { //validaciones para ver si se cargo
            console.log("second success");
        })

    .fail(function() {
        console.log(" error");
    });
}*/

function setTablaDestacados(data) {
    let productos = discos.productos;
    productos.forEach(element => {

        let elementGalery = '<div class="col">';
        elementGalery += '<div class="card shadow-sm" id="card' + element.id + '">';
        elementGalery += '<title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect>';
        elementGalery += '<img src="' + element.tapa + '" class="card-img-top" alt="...">';
        elementGalery += '<div class="card-body">';
        elementGalery += '<p class="card-text"><b> ARTISTA: </b>' + element.artista + ' </p>';
        elementGalery += '<p class="card-text"><b> GÉNERO: </b>' + element.genero + ' </p>';
        elementGalery += '<div class="d-flex justify-content-between align-items-center">';
        elementGalery += '<div class="btn-group">';
        elementGalery += '<button type="button" class="btn btn-sm btn-outline-secondary"> <a href="detalleProductos.html?prodId=' + element.id + '"> Detalle</a></button>';
        elementGalery += '</div><small class="text-muted">9 mins</small></div></div></div></div>';

        let gallery = document.getElementById('gallery_view');
        $('#gallery_view').append(elementGalery);

        console.log(element);
    });
}
