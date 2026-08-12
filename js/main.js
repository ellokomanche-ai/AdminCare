// Función para el menú responsivo en dispositivos móviles
function toggleMenu() {
    var x = document.getElementById("navLinks");
    if (x.className === "nav-links") {
        x.className += " active";
    } else {
        x.className = "nav-links";
    }
}