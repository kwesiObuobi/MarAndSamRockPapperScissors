console.log("hello!")
let choices =["rock", "paper", "scissors"];
function getComputerChoice() {
    
    var random = Math.floor(Math.random( )*3);

    
    return choices[random];
}


function pSwin(pS, cS) {
    if((pS==="rock" && cS==="scissors")||(pS==="paper" && cS==="rock")||(pS==="scissors" && cS==="paper") ){
        pCount++;
        return true;
    }else {
        return false;
    }
}
var cCount=0;
var pCount=0;
function cSwin(pS, cS) {
    if((cS==="rock" && pS==="scissors")||(cS==="paper" && pS==="rock")||(cS==="scissors" && pS==="paper") ){
        cCount++;
        return true;
        
    }else {
        
        return false;
        
    }
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection===computerSelection) return "It's an even game!, computer also chose "+computerSelection;
    if (pSwin(playerSelection, computerSelection)) return "You win! "+ playerSelection+" beats "+computerSelection;
    if (cSwin(playerSelection, computerSelection)) return "You Lose! "+ computerSelection+" beats "+ playerSelection
}

for (let i=1; i<=5; i++){
    let cSelection = getComputerChoice();
    let pSelection = prompt("What's your choice? (rock, paper, scissors)").toLowerCase();
    console.log(playRound(pSelection,cSelection));

}
if (cCount>pCount){
    console.log("You lose "+cCount+" to "+pCount)
}else if (cCount<pCount){
    console.log("You win "+pCount+" to "+cCount)
}else {
    console.log("Your are even! "+pCount+" to "+cCount)
}

