// JavaScript source code


function cargarGeneros() {

    // alert("holu");
    var contenedorGeneros = document.createElement("div");
    contenedorGeneros.setAttribute('class', 'container');
    var generos = new Array();

    generos[0] = new Array("Jazz", "jazz.html", "../images/generos-imagenes/jazz.jpg");
    generos[1] = new Array("Rock", "rock.html", "../images/generos-imagenes/rock.jpg");
    generos[2] = new Array("Funk", "Funk.html", "../images/generos-imagenes/funk.jpg");
    generos[3] = new Array("Pop", "Pop.html", "../images/generos-imagenes/pop.jpg");
    generos[4] = new Array("Cumbia", "Cumbia.html", "../images/generos-imagenes/cumbia.jpg");
    generos[5] = new Array("Reggae", "Reggae.html", "../images/generos-imagenes/reggae.jpg");
    generos[6] = new Array("Electronica", "Electronica.html", "../images/generos-imagenes/electronica.jpg");
    generos[7] = new Array("Hiphop", "Hiphop.html", "../images/generos-imagenes/hiphop.jpg");


    //i < 2 porque tenemos dos filas
    for (i = 0; i < 2; i++) {

        var fila = document.createElement("div");
        fila.setAttribute('class', 'row');

        //esta variable es para que en la segunda fila arranque desde Cumbia
        var ind = 0;

        if (i == 1) { //su estamos en la segunda fila
            ind = 4;  //indice de generos va a ser 4 (5ta pos)
        }

        //for para crear las columnas 
        //j = ind, q vale 0 o 4 segun en q fila estemos
        //se termina cuando dio 4 vueltas
        for (j = ind; j < ind + 4; j++) {
            var columna = document.createElement("div");
            columna.setAttribute('class', 'col-sm-12 col-lg-3 genero');

            var filaInterna = document.createElement("div");
            filaInterna.setAttribute('class', 'row');

            var tituloGenero = document.createElement("div");
            tituloGenero.appendChild(document.createTextNode(generos[j][0]));  // acá en realidad va el label

            var imagenCont = document.createElement("div");
            imagenCont.setAttribute('class', 'imagen');
            var imagenLink = document.createElement("a");
            imagenLink.setAttribute('href', generos[j][1]);

            var imagen = document.createElement("img");
            imagen.setAttribute('src', generos[j][2]);
            imagen.setAttribute('class', 'rounded center imagen-genero');

            imagenLink.appendChild(imagen);
            imagenCont.appendChild(imagenLink);
            filaInterna.appendChild(tituloGenero);
            filaInterna.appendChild(imagenCont);
            columna.appendChild(filaInterna);
            fila.appendChild(columna);
        }

        contenedorGeneros.appendChild(fila);



    }
    var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(contenedorGeneros);

}

//Se lanza la función cuando carga la página
document.addEventListener("DOMContentLoaded", function () {
    cargarGeneros();
});