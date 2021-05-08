
    function go() {
       

        if (document.form.password.value == 'contra' && document.form.login.value == 'usuario') {
            document.form.submit();
            alert("OK");
        }
        else {
            alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
        }
    }

        var input = document.getElementById("contra");
    input.addEventListener("keyup", function (event) {
        //Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("enviar").click();
        }
    });

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