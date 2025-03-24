function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

window.onclick = function(event) {
    var menu = document.getElementById("menu");
    var menuIcon = document.querySelector(".menu-icon");

    if (!menu.contains(event.target) && !event.target.closest('.menu-icon')) {
        menu.classList.remove("show");
    }
};

