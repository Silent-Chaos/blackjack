let firstCard=10
let secondCard=11
let sum=firstCard+secondCard
let HasBlackJack=false
let suml=document.querySelector("#sum-el")
let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")

isAlive=true
let message=""
message="logging out"


function StartGame(){
    cardsEl.textContent= "Your Cards :   "+ firstCard   + "     "+ secondCard
    suml.textContent= "Sum: " + sum

if(sum<=20){
    message="do you want to draw a new card"

}
else if(sum===21){
message="you have won the blackjack congratulations"
    HasBlackJack=true
}
else{
    
    message="oop you suck"
    isAlive=false
}

messageEl.textContent=message

}
function newCard(){

    console.log("pull a new card")
}