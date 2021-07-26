let btn = document.querySelector(".new-card");
let playagain=document.querySelector(".play-again");
const game = document.querySelector(".text");
const start = document.querySelector(".start");
const newc = document.querySelector(".new-card");
let cardsEl = document.querySelector(".cards-el");
let sumEl = document.querySelector(".sum-el");
const show = document.querySelector(".show");
const menu = document.querySelector(".menu");
const playerEl = document.querySelector(".player-el");
let quitgame = document.querySelector(".quit");
let messageEl = document.getElementById("message-el");
start.addEventListener( "click", startgame);
newc.addEventListener("click", newcard);
quitgame.addEventListener("click", quit);
playagain.addEventListener("click",play);
let cards =[];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message ="";
let countwin= 0 ;
let countloss= 0;

function getrandomcard()
{
 let number =  (Math.floor(Math.random()*13)+1);
 if( number === 1)
 {
   return 11 ;
 } else if ( number === 11 || number === 12 || number === 13 )
 {
   return 10;
 } else
 {
   return number;
 }
}

function startgame()
{
  start.classList.add("start-hide");
  isAlive = true ;
  let firstCard = getrandomcard();
  let secondcard = getrandomcard();
  cards = [firstCard , secondcard];
  sum = firstCard + secondcard ;
  btn.classList.add("show-btn");
  quitgame.classList.add("show-quit");
 
  rendergame();
}

function rendergame()
{
 cardsEl.textContent ="Cards : ";
  
for ( let i = 0 ; i < cards.length;i++)
{
  cardsEl.textContent += cards[i] + " ";
}
 sumEl.textContent ="Sum: " + sum ;

if ( sum < 21 )
{
 message = "Do you want to draw a new card?";
 playagain.classList.remove("show-play");

} else if ( sum === 21)
{
 message = "You've got BlackJack!";
  hasBlackJack = true;
  countwin++
  btn.classList.remove("show-btn");
  displayscore();
  playagain.classList.add("show-play");

}else
{
  message ="You're are out of the game!" ;
  isAlive = false;
  btn.classList.remove("show-btn");
  countloss++;
  displayscore();
  playagain.classList.add("show-play");

}
 messageEl.textContent = message;
};

function play()
{
   hasBlackJack = false;
   isAlive = false;
   startgame();  
}

 function newcard()
 {
  if (isAlive === true && hasBlackJack === false )
  {
   let card = getrandomcard();
   sum += card ;  
   cards.push(card);
   rendergame();
}
}

function quit()
{
  game.classList.add("text-hide");
  btn.classList.remove("show-btn");
  playagain.classList.remove("show-play"); 
  quitgame.classList.remove("show-quit");
  playerEl.classList.add("score-hide");
  messageEl.textContent = "Thanks! for playing";
}

function displayscore()
{
playerEl.innerHTML = `player win = ${countwin}
</br>
player loss = ${countloss}`;
}

