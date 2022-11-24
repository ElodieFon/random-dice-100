// pour ce jeux il nous faut : 
// un plateau
// deux joueurs 
// un dés 
let dice = document.getElementById('dice');
// Un dés comporte 6 faces allant de 1 à 6
let diceFaces = ["dice-1","dice-2","dice-3","dice-4","dice-5","dice-6"];// la valeur des index correspond au nom des images 
let diceFace;
let resultat;
//un lanceur de dés 
let rollDice =document.getElementById('rollDice');
// un compteur de point
let resultatEnvoyer = 0 ;
let ptsPlayeur1 = document.getElementById('playeur1Score');
let ptsPlayeur2 = document.getElementById('playeur2Score');
let ptsPlayeur;
// un bouton pour envoyer ses points
let sendPoints = document.getElementById('sendPoints');
// un compteur de tour
let counterRound = 0 ;
let NbrRoundPlayeur1 = document.getElementById('currentPlayeur1');
let NbrRoundPlayeur2 = document.getElementById('currentPlayeur2');
let NbrRoundPlayeur;
// un bouton reset
let resetGame = document.getElementById('resetGame');
resetGame.addEventListener('click', function(){  resetGameClick()})



// le joueur clique sur un bouton pour lancer la partie
rollDice.addEventListener("click",function(){   
    gameStart(); 
    changeFaceDice();
    sendPointsClick();  
    if (resultatEnvoyer >= 100){endGame();}
        
})

function gameStart(){
    // le dés renvois un nombre de point aléatoir compris entre 1 et 6
    resultat = Math.floor((Math.random()*6) + 1); // on ajout +1 car il ni à pas de 0 sur un dés
      // tant que le joueur ne tombe pas sur 1 
    if(resultat != 1){   
           // si c'est le compteur du jour 2 qui tourne
        if (NbrRoundPlayeur == NbrRoundPlayeur2){          
            // les point qu'il envera seront atribuer a sont propre compter 
            ptsPlayeur = ptsPlayeur2 ; 
            // sont nombre de tour augmentera a chaque click et rajoute le resultat du dés      
            counterRound += resultat ;   
        }
        else {
            //sinon c'est le compteur du joueur 1 qui tourne
            NbrRoundPlayeur = NbrRoundPlayeur1;
            // les point qu'il envera seront atribuer a sont propre compter 
            ptsPlayeur = ptsPlayeur1 ; 
            // sont nombre de tour augmentera a chaque click et rajoute le resultat du dés  
            counterRound += resultat ;   
        }
        //afficher le compteur    
    }
    else if (resultat == 1){           
        // le conteur passe a 0 
        counterRound = 0 ;
        // si c'était le compteur du jour 2 qui tourner
        if(NbrRoundPlayeur == NbrRoundPlayeur2) { 
            // on passe au compter du joueur 1 
            NbrRoundPlayeur = NbrRoundPlayeur1 ;  
        }
        else {
            // sinon on passe au joueur 2
            NbrRoundPlayeur = NbrRoundPlayeur2 ;  
        }
    }    
   NbrRoundPlayeur.textContent = counterRound ;
}
function sendPointsClick(){ 
    
//le joueur clique sur un bouton pour envoyer les points a sont compteur
    sendPoints.addEventListener("click",function(){ 
      
       
        // le resultat envoyer prend la valeur du resultat du dée plus la valeur des points déjà enregister     
        if(NbrRoundPlayeur == NbrRoundPlayeur2){
            NbrRoundPlayeur = NbrRoundPlayeur1;  
            resultatEnvoyer += counterRound ;
        }
        else{
            NbrRoundPlayeur = NbrRoundPlayeur2;  
            resultatEnvoyer += counterRound ;
        }  
        // afficher le resultat en html 
        ptsPlayeur.textContent = resultatEnvoyer; 
      
        // repasse le counterRound a 0 
         counterRound = 0 ;         
    });  
}

// Le compteur de point ne peu pas dépasser 100 

//fonction pour changer l'image du dés en fonction du resultat 
function changeFaceDice(diceFace){
    diceFace = diceFaces[(resultat-1)];// un tableu commence à 0 donc j'enlève 1 au resultat pour fair correspondre à l'index.
    dice.innerHTML =`<img src="images/${diceFace}.png" alt="${diceFace}"class="imageDé"/> `    
}
function endGame (){

    alert("partie fini")
}
function resetGameClick(){
    //TODO : fonction pour relancer une partie
    resultat = 0 ;
    counterRound = 0;
    NbrRoundPlayeur1.textContent = counterRound ;
    NbrRoundPlayeur2.textContent = counterRound ;
    resultatEnvoyer = 0;
    ptsPlayeur1.textContent = resultatEnvoyer; 
    ptsPlayeur2.textContent = resultatEnvoyer ;
}

