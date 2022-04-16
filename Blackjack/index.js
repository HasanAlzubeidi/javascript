
let player ={
    playerName: "Hasan",
    playerChips: 145
}



let sum = 0
let hasBlackJack=false
let isAlive=false
let message=""
let cards =[]

let messageEL=document.getElementById("message-el")
let sumEL =document.getElementById("suma-el")
let cardsEL=document.getElementById("cards-el")
// let sumEL=document.querySelector(".suma-el")
// let sumEL=document.querySelector("body")




let playerEL = document.getElementById("player-el")
playerEL.textContent= player.playerName + ": $" + player.playerChips

function startGame(){
   let firstCard = getRandomCard()
   let secondCard = getRandomCard()
   cards.push(firstCard)
   cards.push(secondCard)
   isAlive=true
   sum+=firstCard+secondCard
    renderGame()
}

function getRandomCard(){
   let x =  Math.floor( (Math.random() * 13 ) +1)
   if(x===1){
   return 11
   }else if(x>=11){
   return 10
}  else {
   return x}
}

function renderGame(){

    cardsEL.textContent="Cards: " 
    for(let i =0; i<cards.length; i++){
     cardsEL.textContent += cards[i] + " "
    }

    sumEL.textContent = "Sum: " + sum
if(sum<=20){
    message= "Do you want to draw a new card?"
}else if(sum===21){
 message= "Wohoo! you've got Blackjack"
hasBlackJack=true
}else {
    message = "You're out of the game"
    isAlive=false
}
messageEL.textContent=message

}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
    let newCard = getRandomCard()
    cards.push(newCard)
    sum += newCard
    renderGame()}
}

// let cards = [7,4]
//cards.push(6)
//consile.log(cards)
//cards.pop

/*
for (let count = 1; count <11; count +=1)

*/

/*
let x = Math.random()  (generate number between 0 and 0,999)
let x = Math.floor()
let x = Math.floor(Math.random())

*/
