document.getElementById('bouton-1').addEventListener('click', function() {
    
    var square = document.getElementById('carré-bleu');
    square.style.display = 'block';
    
    square.scrollIntoView({ behavior: 'smooth' });
    });