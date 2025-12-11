
function toggleMenu() {
  const menu = document.getElementById("menu");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
/*  contato   */ 
function abrirDiv() {
  document.getElementById("popup").style.display = "flex";
}

function fecharDiv() {
  document.getElementById("popup").style.display = "none";
}


