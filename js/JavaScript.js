
function Enviar() {
    var nombre = document.getElementById("nombreBanda");
    var fecha = document.getElementById("fecha");
    alert("Gracias por contactarnos, " + nombre.value + "!")
}

function entradasOk() {

        alert("Te anotaste correctamente");
    
}

function entradasFalse() {

    alert("Entradas Agotadas");

}

//

//    Execute a function when the user releases a key on the keyboard


    $(document).on('click', '.number-spinner button', function () {
        var btn = $(this),
            oldValue = btn.closest('.number-spinner').find('input').val().trim(),
            newVal = 0;

        if (btn.attr('data-dir') == 'up') {
        newVal = parseInt(oldValue) + 1;
        } else {
            if (oldValue > 1) {
        newVal = parseInt(oldValue) - 1;
            } else {
        newVal = 1;
            }
        }
        btn.closest('.number-spinner').find('input').val(newVal);
    });