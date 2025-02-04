// Función para cambiar el color de fondo y del encabezado
function cambiarApariencia(genero) {
    let colorFondo, colorEncabezado;
    
    if (genero === "hombre") {
        colorFondo = "#87CEFA"; // Azul
        colorEncabezado = "#0056b3"; // Azul oscuro
    } else if (genero === "mujer") {
        colorFondo = "#FFC0CB"; // Rosado
        colorEncabezado = "#FF69B4"; // Rosado fuerte
    } else {
        colorFondo = "#D3D3D3"; // Gris neutro
        colorEncabezado = "#808080"; // Gris oscuro
    }

    // Cambia los colores
    document.body.style.backgroundColor = colorFondo;
    document.querySelector(".encabezado").style.backgroundColor = colorEncabezado;
}

// Carrusel de imágenes
let imagenesCarrusel = ["img/aa1.jpg", "img/aa2.jpg", "img/aa3.jpg"];
let indexCarrusel = 0;
const imagenCarrusel = document.getElementById("imagen-carrusel");

function cambiarImagenCarrusel() {
    indexCarrusel = (indexCarrusel + 1) % imagenesCarrusel.length;
    imagenCarrusel.src = imagenesCarrusel[indexCarrusel];
}

// Cambiar imagen cada 3 segundos
setInterval(cambiarImagenCarrusel, 3000);
document.addEventListener("DOMContentLoaded", function () {
    generarCalendario();
});
