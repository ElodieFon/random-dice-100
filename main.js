// pour ce jeux il nous faut : 
// un plateau
let gameBoard = document.getElementById('gameboard');
// deux joueurs 
let playeur1 = document.getElementById('playeur1');
let playeur2 = document.getElementById('playeur2') ;
// un dés 
let dice = document.getElementById('dice') ;

// un compteur de point
let counterPtsPlayeur = 0; 
// un compteur de tour
let counterRound = 0 ;
let resultat = 0 ;
// Pour commencer on lance une nouvelle partie 
function gameStart(){

}
// Un dés comporte 6 faces allant de 1 à 6
let diceNumbers = [1,2,3,4,5,6];
// Chaque joueurs à un compteur de points 
// Le compteur de point ne peu pas dépasser 100 ou etre inferieur à 0

// le joueur clique sur un bouton pour lancer le dés
document.getElementById('rollDice').addEventListener("click",function(){
    // le dés renvois un nombre de point aléatoir compris entre 1 et 6
    resultat = Math.floor((Math.random()*6)+1);
    if(resultat != 1){
        // tant que le joueur ne tombe pas sur 1 
        // sont nombre de tour augment 
        counterRound ++ ;
    }
    else{
        // sinon son nombre de tour repasse à 0 
        counterRound = 0;
    }
  
    console.log("résultat du dé "+ resultat);
    console.log("tour " + counterRound);
})


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