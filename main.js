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
let resultatenvoyer = 0 ;
let ptsPlayeur1 = document.getElementById('playeur1Score')
let ptsPlayeur2 = document.getElementById('playeur2Score')
// un compteur de tour
let counterRound = 0 ;
let NbrRoundPlayeur1 = document.getElementById('currentPlayeur1')
let NbrRoundPlayeur2 = document.getElementById('currentPlayeur2')
// Un dés comporte 6 faces allant de 1 à 6
let diceFaces = ["dice-1","dice-2","dice-3","dice-4","dice-5","dice-6"];
let diceFace;
let resultat = 0 ;


// Pour commencer on lance une nouvelle partie 
function gameStart(){

}

// alert("fin de partie")
// le joueur clique sur un bouton pour lancer le dés
document.getElementById('rollDice').addEventListener("click",function(){
    // le dés renvois un nombre de point aléatoir compris entre 1 et 6
    resultat = Math.floor((Math.random()*6)+1);
    diceFace = diceFaces[(resultat-1)];
    //changer l'image du dés
    changeFaceDice(diceFace);
    if(resultat != 1){
        // tant que le joueur ne tombe pas sur 1 
        // sont nombre de tour augment 
        counterRound ++ ;
    }
    else{
        // sinon son nombre de tour repasse à 0 
        counterRound = 0;
    }
    // Afficher le nombre de tour en html
    NbrRoundPlayeur1.innerHTML = ` <span> ${counterRound} </span> ` 

    
    //le joueur clique sur un bouton pour envoyer les points a sont compteur
    document.getElementById('sendPoints').addEventListener("click",function(){
       
    // le resultat envoyer prend la valeur du resultat du dée plus la valeur des points déjà enregister
    
    resultatenvoyer = resultat + counterPtsPlayeur;
    // afficher le resultat en html 
    playeur1Score.innerHTML = `<span>${resultatenvoyer}</span>` ;  
      
    });
    // conserver la valeur du précédent envoi 
    counterPtsPlayeur = resultatenvoyer ;
    // Le compteur de point ne peu pas dépasser 100 ou etre inferieur à 0
    if (counterPtsPlayeur > 100){
        alert("fin de partie")
    }
})
//function pour changer l'image du dés
function changeFaceDice(diceFace){
    diceFace = diceFaces[(resultat-1)];
    dice.innerHTML =`<img src="images/${diceFace}.png" alt="${diceFace}"class="imageDé"/> `    
}


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