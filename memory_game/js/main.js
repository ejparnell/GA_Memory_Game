let cards = ['queen', 'queen', 'king', 'king'];
let cardsInPlay = [];

let checkForMatch = function () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again.");
    }
}

let flipCard = function (cardId) {
    if (cardsInPlay.length === 2) 
    checkForMatch();
    cardsInPlay.push(cards[cardId]);
    console.log('User flipped ' + cards[cardId]);
}

flipCard(2, 0);