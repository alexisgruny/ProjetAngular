
// modale
var modal = document.getElementById('aModal');

// le bouton pour avoir la modale
var btn = document.getElementById("aBtn");

// avoir le span pour fermer la modale
var span = document.getElementsByClassName("close")[0];

// on click ouvrir la modale
function modale() {
var modal = document.getElementById('aModal');
modal.style.display = "block";
}

// on click close la modale
span.onclick = function() {
  modal.style.display = "none";
}

// quand click a cotés close modale
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
