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

function setTablaDestacados() {
    let productos = discos.productos;
    productos.forEach(element => {

        let elementGalery = '<div class="col"><div class="card shadow-sm" id="card' + element.id + '">';
        elementGalery += '<svg class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">' + element.titulo + '</text></svg>';
        elementGalery += '<img src= ' + element.tapa + 'alt="">';
        elementGalery += '<div class="card-body">';
        elementGalery += '<h5 class="card-title"><b> ARTISTA: </b>' + element.artista + ' </h5>';
        elementGalery += '<p class="card-text"><b> GÉNERO: </b>' + element.genero + ' </p>';
        elementGalery += '<div class="d-flex justify-content-between align-items-center">';
        elementGalery += '<div class="btn-group">';
        elementGalery += '<button type="button" class="btn btn-sm btn-outline-secondary"> <a href="detalleProductos.html?prodId='+ element.id+'"> Detalle</a></button>';
        elementGalery += '</div><small class="text-muted">9 mins</small></div></div></div></div>';

        let gallery = document.getElementById('gallery_view');
        $('#gallery_view').append(elementGalery);

        console.log(element);
    });
}