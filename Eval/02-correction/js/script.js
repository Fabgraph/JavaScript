$(function(){
    var choix = $('#name');
    var raison = $('#texte');
    
    $('form').submit(function(event){
        var erreur = false;

        event.preventDefault();
        
        if(choix.val() === "") {
            choix.addClass('red');
            erreur = true;
        } else {
            choix.addClass('green');
        }
    });

}); // fin document ready