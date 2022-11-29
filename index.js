 
let cards=[];
let isAlive=true;
let hasBlackJack=false;
let message="";
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el");
let cardEl=document.getElementById("cards-el");
let player={
    name:"Abc ",
    chips:145
}
let playerEl=document.querySelector("#player-el");
playerEl.textContent=player.name+ "$"+" "+player.chips;
function startGame(){
    let firstCard= getRandomCard();
let secondCard= getRandomCard();
cards=[firstCard,secondCard];
sum=firstCard+secondCard;
let isAlive=true;
    renderGame();
}
function getRandomCard(){
    let randowNumber=Math.floor(Math.random()*13)+1;
    return randowNumber;
}
function renderGame(){
    cardEl.textContent="Cards:"+" "+cards[0]+" "+cards[1];
    for(let i=1;i<cards.length;i++){
    sumEl.textContent="Sum:"+sum;
if (sum<21){
    message="Do you want to draw a new card";}
    else if(sum===21){
    message="You got BlackJack";
    hasBlackJack=true;
    }else if(sum>21){
    message="You are out the game";
    isAlive=false;
    }
    messageEl.textContent=message;
   
}
}
function newCard(){
    if(isAlive===true && hasBlackJack===false){
    let card= getRandomCard()
    sum+=card;
    cards.push(card);
    renderGame();
    for(let i=2;i<cards.length;i++){
        cardEl.textContent+=" "+cards[i];
    }
}
}
function reStart(){
    isAlive=true;
    hasBlackJack=false;
    cards.length=0;
    cardEl.textContent="Cards:"+" ";
    sumEl.textContent="Sum: "+" ";
    messageEl.textContent="Want to paly a round?"
}
