
function EnviarFecha() {
    var nombre = document.getElementById("nombreBanda");
    var fecha = document.getElementById("fecha");


    if (nombreBanda == "" || fecha == "") {
        alert("Debes ingresar todos los campos para continuar");
        return false;
    } else {
        document.form.submit();
        alert("Gracias por contactarnos, " + nombre.value + "!");

    }



}

function entradasOk() {

        alert("Te anotaste correctamente");
    
}

function entradasFalse() {

    alert("Entradas Agotadas");

}

//
