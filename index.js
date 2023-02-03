
let player={
Name:"Per",
Chip:100
}

let sum=0
let HasBlackJack=false
let suml=document.querySelector("#sum-el")
let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let cards=[]
let isAlive=false
let message=""

let playerEl=document.getElementById("player-el")
message="logging out"
playerEl.textContent=player.Name+" : $"+ player.Chip

function getRandomCard(){
let ranNum = Math.floor(Math.random()*13+1)
if (ranNum===1){
return 11
}
else if(ranNum>=11){
return 10
}
else{
    return ranNum
}

}
function StartGame(){
    isAlive=true
    let firstCard=getRandomCard()
let secondCard=getRandomCard()
sum=firstCard+secondCard
cards=[firstCard,secondCard]

    renderGame()
}

function renderGame(){
    cardsEl.textContent= "Your Cards : "
 for(let i=0; i < cards.length; i++){
        cardsEl.textContent+=cards[i]+" "

    }
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
    if(isAlive===true && HasBlackJack===true)
    {
let cardd=getRandomCard()
sum=sum+cardd
cards.push(cardd)
renderGame()

}
}

