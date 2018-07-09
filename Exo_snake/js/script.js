var snake = document.querySelectorAll('div');
var bouton1 = document.querySelector('#droite');
var bouton2 = document.querySelector('#gauche');
// var clavier = keyright;
var leftPosition = 0;
// var rightPosition = 0;
// var topPosition = 0;
// var bottomPosition = 0;

function droite() {
    leftPosition += 100;
    snake.style.left = leftPosition + 'px';

}

function gauche() {
    rightPosition += 5;
    snake.style.right = rightPosition + 'px';

}

// function haut() {
//     topPosition += 5;
//     snake.style.bottom = topPosition + 'px';

// }

// function bas() {
//     bottomPosition += 5;
//     snake.style.top = bottomPosition + 'px';

// }
bouton1.addEventListener('click', droite);
bouton2.addEventListener('click', gauche);

// window.onkeydown = function(e) {
//     var key = e.keyCode || e.which;
//     switch (key) {
//         case 37:
//         //-Move left
//         break;
//     case 39:
//         //-Move right
//         break;
//     case 38:
//         //-Move up
//         break;
//     case 40:
//         //-Move down
//         break;
//     default:
//         break;
//     }
// };
 