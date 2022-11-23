// pour ce jeux il nous faut : 
// un plateau
let gameBoard = document.getElementById('gameboard');
// deux joueurs 
let playeur1 = document.getElementById('playeur1');
let playeur2 = document.getElementById('playeur2');
// un dés 
let dice = document.getElementById('dice');
// Un dés comporte 6 faces allant de 1 à 6
let diceFaces = ["dice-1","dice-2","dice-3","dice-4","dice-5","dice-6"];// la valeur des index correspond au nom des images 
let diceFace;
let resultat = 0 ;
//un lanceur de dés 
let rollDice =document.getElementById('rollDice');
// un compteur de point
let counterPtsPlayeur = 0; 
let resultatenvoyer = 0 ;
let ptsPlayeur1 = document.getElementById('playeur1Score');
let ptsPlayeur2 = document.getElementById('playeur2Score');
// un bouton pour envoyer ses points
let sendPoints = document.getElementById('sendPoints');
// un compteur de tour
let counterRound = 0 ;
let NbrRoundPlayeur1 = document.getElementById('currentPlayeur1');
let NbrRoundPlayeur2 = document.getElementById('currentPlayeur2');


// le joueur clique sur un bouton pour lancer la partie
rollDice.addEventListener("click",function(){   
    gameStart();
})

function gameStart(){
    // le dés renvois un nombre de point aléatoir compris entre 1 et 6
    resultat = Math.floor((Math.random()*6) + 1); // on ajout +1 car il ni à pas de 0 sur un dés

    //changer l'image du dés
    changeFaceDice();

    // compter le nombre de tour
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
    sendPoints.addEventListener("click",function(){    
        // le resultat envoyer prend la valeur du resultat du dée plus la valeur des points déjà enregister   
        resultatenvoyer = resultat + counterPtsPlayeur;
        // afficher le resultat en html 
        playeur1Score.innerHTML = `<span>${resultatenvoyer}</span>` ;        
    });
    // conserver la valeur du précédent envoi 
    counterPtsPlayeur = resultatenvoyer ;
    
    // Le compteur de point ne peu pas dépasser 100 
    if (counterPtsPlayeur >= 100){ 
        //si il depasse lancer la fin de partie
        endGame() 
    }
}


//fonction pour changer l'image du dés en fonction du resultat 
function changeFaceDice(diceFace){
    diceFace = diceFaces[(resultat-1)];// un tableu commence à 0 donc j'enlève 1 au resultat pour fair correspondre à l'index.
    dice.innerHTML =`<img src="images/${diceFace}.png" alt="${diceFace}"class="imageDé"/> `    
}
//fonction fin de partie
function endGame() {
    // alert("fin de partie")
    alert("fin de partie") 
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