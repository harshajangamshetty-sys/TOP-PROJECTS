document.getElementById("btn").addEventListener("click", playGame);
function playGame(){
let humanScore = 0;
let computerScore = 0;

for(let i = 0; i < 5; i++){
    let result = playRound(getHumanChoice() , getComputerChoice());
    if(result.includes("You Win!")){
        humanScore++;
    }else if(result.includes("You Lose!")){
        computerScore++;
    }else{
        i--;
    }
    console.log(result);
    console.log(`YOU - ${humanScore} ,COMPUTER - ${computerScore}`);
}
if (humanScore > computerScore){
    alert("YOU WIN!");
}else{
    alert("YOU LOSE");
}
}
function playRound(a,b){
    if(a === b){
        return "Tie";
}else if(a === "rock" && b === "scissors"){
return (`You Win! ${a} Beats ${b}`)
}else if(b === "rock" && a === "scissors"){
    return (`You Lose! ${b} Beats ${a}`)
}else if(a === "paper" && b === "rock"){
    return (`You Win! ${a} Beats ${b}`);
}else if(b === "paper" && a === "rock"){
    return (`You Lose! ${b} Beats ${a}`)
}else if(a === "scissors" && b === "paper"){
    return (`You Win! ${a} Beats ${b}`);
}else if(b === "scissors" && a === "paper"){
    return (`You Lose! ${b} Beats ${a}`);
}
}
function getHumanChoice(){
    const valid = ["rock", "paper", "scissors"];
    let A = prompt("Enter your choice").trim().toLowerCase();
    if(!valid.includes(A)){
         return getHumanChoice()
    }else{// ask again
return A; 
    }
}
function getComputerChoice(){
    const choice = ["rock" , "paper" , "scissors"];
    let random = Math.floor(Math.random() * choice.length);
    let select = choice[random];
    return select;
}