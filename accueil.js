function afficherCarre(numero) {
   
    document.getElementById('illu-1').style.display = 'none';
    document.getElementById('illu-2').style.display = 'none';
    document.getElementById('illu-3').style.display = 'none';
    document.getElementById('illu-4').style.display = 'none';
    document.getElementById('illu-5').style.display = 'none';
    


    var square = document.getElementById('illu-' + numero);
    square.style.display = 'block';

    setTimeout(function() {
        window.scrollTo({
            top: square.offsetTop,
            behavior: 'smooth'
        });
    }, 100); 
}

afficherCarreEtDefiler('bouton-1', 'illu-1');
afficherCarreEtDefiler('bouton-2', 'illu-2');
afficherCarreEtDefiler('bouton-3', 'illu-3');
afficherCarreEtDefiler('bouton-4', 'illu-4');
afficherCarreEtDefiler('bouton-5', 'illu-5');


function agrandirImage(src) {
    var modal = document.getElementById("modal");
    var imageAgrandie = document.getElementById("image-agrandie");

    // Met à jour la source de l'image affichée dans le modal
    imageAgrandie.src = src;

    // Affiche le modal
    modal.style.display = "block";
}

// Fonction pour fermer le modal
function fermerModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}