// pour ce jeux il nous faut : 
// un plateau
let gameBoard = document.getElementById("gameboard");
// deux joueurs 
let playeur1;
let playeur2 ;
// un dés 
let dice = [];
// un compteur de point
let counterPtsPlayeur ; 
// un compteur de tour
let counterRound ;

// ************************************* PSEUDO CODE *********************************//

// Pour commencer on lance une nouvelle partie 

// Un dés comporte 6 faces allant de 1 à 6

// Chaque joueurs à un compteur de points 
// Le compteur de point ne peu pas dépasser 100 ou etre inferieur à 0

// le joueur clique sur un bouton pour lancer le dés
// le dés renvois un nombre de point aléatoir compris entre 1 et 6

// chaque tour du joueur est compté :
// tant que le joueur ne tombe pas sur 1 
// sont nombre de tour augment (1 click = 1 tour) 
// sinon sont nombre de tour passe a 0 
// fin tant que

// tant que :
// si le joueur dont c'est le tour ne tombe pas sur 1 ou n'envoi pas c'est points au compteur :
// il peu relancer le dés
// sinon si il à envoyé ses points :
// son compteur ajout les points , c'est au tour de son adversaire
// sinon il tombe sur 1 c'est au tour de son adversaire
// fin tant que

// Todo : trouver une fonction pour savoir à qui est le tour 

// quand le joueur arrive à 100 points le joueur a gagné
//fin de partie
//les compteurs sont remis a 0

// on peu relancer une partie