
// pour ce jeux il nous faut : 
// un plateau
let gameBoard = document.getElementById('gameboard');
// deux joueurs 
let playeur1 = document.getElementById('playeur1');
let playeur1Title = playeur1.querySelector('#playeurTitle1');
let playeur2 = document.getElementById('playeur2');
let playeur2Title = playeur2.querySelector('#playeurTitle2');
//un compteur de point pour chaque joueur avec un affichage
let scorePlayeur1 = playeur1.querySelector('#playeur1Score');
let scoresPlayeur1 = 0 ;
scorePlayeur1.textContent = scoresPlayeur1 ;
let scorePlayeur2 = playeur2.querySelector('#playeur2Score');
let scoresPlayeur2 = 0 ;
scorePlayeur2.textContent = scoresPlayeur2 ;
// un compteur de tour pour chaque joueur avec un affichage
let currentPlayeur1 = playeur1.querySelector('#playeur1Current');
let currentsPlayeur1 = 0;
currentPlayeur1.textContent = currentsPlayeur1 ;
let currentPlayeur2 = playeur2.querySelector('#playeur2Current');
let currentsPlayeur2 = 0 ;
currentPlayeur2.textContent = currentsPlayeur2 ;
//un moyen d'envoyer le score (avec un bouton)
let sendPoints = document.getElementById('sendPoints');
// un dés 
let dice = document.getElementById('dice');
//un lanceur de dés (bouton)
let rollDice =document.getElementById('rollDice');
// Un dés comporte 6 faces allant de 1 à 6
let diceFaces = ["dice-1","dice-2","dice-3","dice-4","dice-5","dice-6"];// la valeur des index correspond au nom des images 
// une seul face visible
let diceFace;
// le resultat du dés
let resultatDice;
// un message de fin de partie
let messageEndGame ;
// un bouton pour réinitialiser le jeu
let resetGameButton = document.getElementById('resetGame');
resetGameButton.addEventListener('click', function(){
    resetGame();
})




// =================================================================================================
console.log(resultatDice);
//définir quand commence le jeux 
//au lancement du dés 
rollDice.addEventListener("click" , function(){
  // le dés renvois un nombre de point aléatoir compris entre 1 et 6  
    resultatDice = Math.floor((Math.random()*6) + 1); // on ajout +1 car il ni à pas de 0 sur un dés 
    // on affiche l'image en fonction du resultat des du dés
    diceFace = diceFaces[(resultatDice-1)];// un tableu commence à 0 donc j'enlève 1 au resultat pour fair correspondre à l'index.
    dice.innerHTML =`<img src="images/${diceFace}.png" alt="${diceFace}" class="imageDé"/> ` ;
    //si le dés affiche 1 
    if (resultatDice == 1 ){
        // le dés de 1 vos 0 pts
        resultatDice = 0;
        // si c'est le joueur 1 qui a la classe active
        if(playeur1.classList.contains('playeur_actif')){
            // le compteur de tour repasse à 0
            currentsPlayeur1 = 0;
            // on rafraichi l'affichage
            currentPlayeur1.textContent = currentsPlayeur1 ; 
            //on change de joueur 
            playeurActifSwitch();
         }
        // si c'est le joueur 2 qui a la classe active
         else if (playeur2.classList.contains('playeur_actif')){
            // le compteur de tour repasse à 0
            currentsPlayeur2 = 0;
            // on rafraichi l'affichage
            currentPlayeur2.textContent = currentsPlayeur1 ; 
            //on change de joueur 
            playeurActifSwitch();
         }
    }
    // on défini a qui revient les point selon la présence ou non la class playeur_actif
    if(playeur1.classList.contains('playeur_actif')){
        // on ajoute les resultas du dés on compteur 
       currentsPlayeur1 += resultatDice;
       //on affiche le compteur
       currentPlayeur1.textContent = currentsPlayeur1 ;  
    }
    else if (playeur2.classList.contains('playeur_actif')){ 
        // on ajoute les resultas du dés on compteur 
       currentsPlayeur2 += resultatDice;
       // on affiche le compteur
       currentPlayeur2.textContent = currentsPlayeur2 ;
    }   
});
//définir comment envoyer les scores
// en cliquant sur le bouton envoyer
sendPoints.addEventListener("click" ,  function(){
    // on défini a qui revient les point
    if(playeur1.classList.contains('playeur_actif')){
        scoresPlayeur1 += currentsPlayeur1;
        scorePlayeur1.textContent = scoresPlayeur1 ;
        //si le score du joueur est superieur ou égale a 100
        if(scoresPlayeur1 >= 100){
            //lancer la function de fin de partie
            endGame();
        }  
        //sinon    
        else {
            // on change de joueur et le compteur tour repasse a 0
            playeurActifSwitch(); 
            currentsPlayeur1 = 0 ; 
        }   
    }
    else if(playeur2.classList.contains('playeur_actif')){
        scoresPlayeur2 += currentsPlayeur2;
        scorePlayeur2.textContent = scoresPlayeur2 ;
        //si le score du joueur est superieur ou égale a 100
        if(scoresPlayeur2 >= 100){
            //lancer la function de fin de partie
            endGame();
        }      
        else {
            // on change de joueur et le compteur tour repasse a 0
            playeurActifSwitch(); 
            currentsPlayeur2 = 0 ;      
        }            
    }
    // on rafraichi l'affichage
    currentPlayeur1.textContent = currentsPlayeur1 ;  
    currentPlayeur2.textContent = currentsPlayeur2 ;
});
// indiquer le passage au joueur suivant
function playeurActifSwitch(){
 if(playeur1.classList.contains('playeur_actif')){
        playeur1.classList.remove('playeur_actif');
        playeur1Title.classList.remove('playeur_title_actif');   
        playeur2.classList.add('playeur_actif'); 
        playeur2Title.classList.add('playeur_title_actif');  
    }
    else {
        playeur1.classList.add('playeur_actif');
        playeur1Title.classList.add('playeur_title_actif');   
        playeur2.classList.remove('playeur_actif'); 
        playeur2Title.classList.remove('playeur_title_actif');      
    }
}
//definir comment reset le jeux
function resetGame(){
// on remet tout a 0
currentsPlayeur1 =0;
currentsPlayeur2 = 0 ;
scoresPlayeur1 = 0;
scoresPlayeur2 = 0 ;
playeur1.classList.add('playeur_actif');
playeur1Title.classList.add('playeur_title_actif');   
playeur2.classList.remove('playeur_actif'); 
playeur2Title.classList.remove('playeur_title_actif');    
// on rafraichi l'affichage
currentPlayeur1.textContent = currentsPlayeur1 ;
currentPlayeur2.textContent = currentsPlayeur2 ;
scorePlayeur1.textContent = scoresPlayeur1 ;
scorePlayeur2.textContent = scoresPlayeur2 ;
}
//indiquer une fin de partie

function endGame(){
    //TODO : Faire une annimation et suprimer l'alerte
    if(playeur1.classList.contains('playeur_actif')) {
        alert("fin de partie , vainqueur joueur 1 !");
    }
    else {
        alert("fin de partie , vainqueur joueur 2 !");
    }
    resetGame();
}
