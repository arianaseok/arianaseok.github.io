//Ejecuta la funcion en el evento click
document.getElementById("btn_abierto").addEventListener("click", open_close_menu);

//Creo variables para mis id del html

var menu_lado = document.getElementById("menu_lado");
var btn_abierto = document.getElementById("btn_abierto");
var body = document.getElementById("body");

//Aca añado un evento que permitira mostrar y ocultar la barra de navegacion

    function open_close_menu() {
        body.classList.toggle("body_movimiento");
        menu_lado.classList.toggle("menu_lado_movimiento");
    }

if (window.innerWidth < 760) {
        body.classList.add("body_movimiento");
        menu_lado.classList.add("menu_lado_movimiento");
}

window.addEventListener("resize", function() {
    if(window.innerWidth > 760) {
        body.classList.remove("body_movimiento");
        menu_lado.classList.remove("menu_lado_movimiento");
    }

    if(window.innerWidth < 760) {
        body.classList.add("body_movimiento");
        menu_lado.classList.add("menu_lado_movimiento");
    }
    })

//Añado evento para cambiar fondo

document.getElementById('btn_color').addEventListener('click', function() {
    document.body.style.backgroundColor = '#F5F6FF';
})

document.getElementById('boton_default').addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
})
