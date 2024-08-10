document.getElementById('bouton-1').addEventListener('click', function() {
    // Afficher le carré bleu
    var square = document.getElementById('illu-1');
    square.style.display = 'block';
    
    // Retarder le défilement pour s'assurer que le carré est visible
    setTimeout(function() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }, 100); // Petit délai pour s'assurer que le carré est bien rendu avant de faire défiler
});