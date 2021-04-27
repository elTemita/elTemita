
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

//

//    Execute a function when the user releases a key on the keyboard


