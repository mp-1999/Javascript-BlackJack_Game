let firstCard = getRandomCard();
let secondCard = getRandomCard();

let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEL = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let cards = [];
let player = {
    name: "Muskan",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

console.log(sum);

function startgame(){
    isAlive=true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum=firstCard+secondCard;
    cards=[firstCard,secondCard];
    rendergame();
}
function rendergame(){
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        
    }
    else if (sum === 21){
        message="you got a blackjack";
        hasBlackJack = true;
    }
    else{
        message="you are out of the game!";
        isAlive = false;
        
    }

    messageEL.textContent=message;
    sumEl.textContent="Sum: "+ sum;
    // we need to render all the cards
    cardsEl.textContent="Cards: "
    for(i=0; i<cards.length;i++){
        cardsEl.textContent=cardsEl.textContent+cards[i]+" ";
    }
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        console.log("Drawing a new card from the deck!");
        let card = getRandomCard();
        sum= sum+card;
        // push the card to the cards array
        cards.push(card);
        console.log(cards);
        rendergame();


    }
}

function getRandomCard(){
    let number= Math.floor(Math.random()*13)+1;
    if(number===1){
        return 11;
    }
    else if (number>10){
        return 10;
    }
    else{
        return number;
    }
}


