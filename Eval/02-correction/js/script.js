$(function(){
    var choix = $('#name');
    var raison = $('#texte');
    var section = $('.section');
    var tete = $('.tete');
    
    $('form').submit(function(event){
        var erreur = false;

        event.preventDefault();
        
        if(choix.val() === "") {
            choix.addClass('red');
            erreur = true;
        } else {
            choix.addClass('green');
        }

        if(raison.val().length < 15){
            raison.addClass('red');
            erreur = true;
        } else {
            raison.addClass('green');
        }

        choix.on('change', function(){
            $(this).removeClass('red green');
        });
    
        raison.on('change', function(){
            $(this).removeClass('red green');
        });

        if (erreur === false) {
            $('form').html('Votre commande a bien été prise en compte');
        }

    }); /* fin submit */

    section.mouseenter(function(){
        tete.css({ background: '#061339' });
    });

    section.mouseleave(function(){
        tete.css({ background: '#7885a' });
    });

    // Optionnel ne l'écrive que ceux qui veulent
    //  
    

}); // fin document ready