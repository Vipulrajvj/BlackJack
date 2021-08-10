// step 1 
// to test 
// let firstCard = 1
// let secondCard = 3


// step6 : Create a function to get a random crad

let firstCard = randomCard()
let secondCard = randomCard()
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard

let message = ""
let gameOver = false

//Step 2 is getting the elements from the elemetn 
const messageId = document.getElementById("messageId")

const sumId = document.getElementById("sumId")
// or u can use document.querySelector("#sumId")
const cardId = document.getElementById("cardId")
const btn_one = document.getElementById("btn_one")
const btn_two = document.getElementById("btn_two")
const reset = document.getElementById("reset")
//using event listeneres on click for the funciton startGame
btn_one.addEventListener("click",startGame)
btn_two.addEventListener("click",newCard)

reset.addEventListener("click",function(){
    sumId.innerText = "Sum :  " 
    cardId.textContent = "Cards: "
})

function randomCard(){

    ///////////////////Important 
    //step 7 use random to get a number from 1 to 52 , add for range (add 3 for 3-52 )
    let randomN = Math.floor(Math.random()*13)  + 1 
    if (randomN>10){
        return 10
    } 
    else if (randomN ===1 ){
        return 11
    }
    return randomN
}


function startGame(){
    renderGame()
}

// step 3 is creawting the funciton 
function renderGame(){


   
//step 4 is chaging the values innside the html when button is clicked 
    // step5 use textContent istead of innerText because it gives proper spacing 
    cardId.textContent = "Cards: " 
    
    for (let i = 0 ;i <cards.length;i++){
        cardId.textContent += cards[i] + " "
    }

    sumId.innerText = "Sum :  " + sum
    if (sum <= 20){
        message = "do u wanna to draw a new card"
        gameOver = false
    }else if(sum===21){
        message = "you have a blackjack"
        gameOver = false
    }else{
        message = "Game over, You lost"
        gameOver = true
    }

    messageId.innerText = message
    
}


function newCard(){
    if(!gameOver){
    let nextcard = randomCard();
    sum += nextcard
    cards.push(nextcard)    
    renderGame()    
}
}

