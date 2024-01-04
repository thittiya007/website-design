function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function myFunctions(x) {
    x.classList.toggle("change");

    let menu = document.getElementById("mylink");
    if (menu.className === 'menu') {
      menu.className += ' menu-active'
    }   else {
      menu.className = "menu";
    }
}