//fight.html
const timerElement=document.getElementById("timer");
const playerNameElement=document.getElementById("playerName");
const gameOver=document.querySelector(".message-game-over");
const roundOver=document.querySelector(".message-round-over");
const winnerMessage=document.querySelector(".message-winner");
const exitToMainMenu=document.querySelector(".exit-image");
const questionMarkButton=document.querySelector(".question-image");
const attacksContainer=document.querySelector(".attacks-container");
const attackNameArray=Array.from(document.getElementsByClassName("attack-name"));
const damageArray=Array.from(document.getElementsByClassName("damage"));
const conditionArray=Array.from(document.getElementsByClassName("condition"));
const roundDisplay=document.getElementById("round");
const countdown3=document.getElementById("countdown3");
const countdown2=document.getElementById("countdown2");
const countdown1=document.getElementById("countdown1");
const countdown=document.getElementById("countdown");
const playAgain=document.querySelector(".play-again-container");
const yesButton=document.getElementById("yes");
const noButton=document.getElementById("no");
const player = document.querySelector(".player img");
const options = document.querySelectorAll(".buttons.left-buttons button");
const player2NameElement=document.getElementById("player2Name");
const optionsContainer=document.querySelector(".options.container");
const attackName=document.getElementById("attackName");
const attackDamage=document.getElementById("attackDamage");
//kombat.js
const playerPlaying=localStorage.getItem("playerPlaying")==="true";
const computerPlaying=localStorage.getItem("computerPlaying")==="true";
//settings.js
const roundsInput = localStorage.getItem("roundsInput");
const roundDurationInput = localStorage.getItem("roundDurationInput");
const playerName = localStorage.getItem("playerName");
