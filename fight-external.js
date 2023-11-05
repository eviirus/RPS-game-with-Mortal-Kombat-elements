let timeLeft=roundDurationInput;
let initialRound=0, roundDisplayNumber=1;
let timer;
const playerIndicators=[], computerIndicators=[];
let currentPlayer=null, currentComputer=null;
let currentPlayerIndex=-1, currentComputerIndex=-1;
let playerWins=0, computerWins=0;
let isContainerVisible=false;

//health-bar.js
const healthBar=new HealthBar(200);

playerNameElement.textContent=playerName;
timerElement.textContent=roundDurationInput;

countdown3.style.display="none";
countdown2.style.display="none";
countdown1.style.display="none";
countdown.style.display="none";
gameOver.style.display="none";
roundOver.style.display="none";
winnerMessage.style.display="none";
playAgain.style.display="none";
attackName.style.display="none";
attackDamage.style.display="none";
attacksContainer.style.display="none";

for(let i=1;i<=10;i++){
  const playerIndicator=document.getElementById('indicator'+i);
  const computerIndicator=document.getElementById('computer-indicator'+i);

  playerIndicators.push(playerIndicator);
  computerIndicators.push(computerIndicator);
  
  if(i<=roundsInput){
    playerIndicator.style.display="block";
    computerIndicator.style.display="block";
  }
  else{
    playerIndicator.style.display="none";
    computerIndicator.style.display="none";
  }
}

function displayCountdown(countdownElement, number, delay){
  countdownElement.style.display="flex";
  setTimeout(() =>{
    countdownElement.style.display="none";

    if(number>0){
      displayCountdown(
        countdownElement === countdown3 ? countdown2 : 
        countdownElement === countdown2 ? countdown1 : countdown,
        number-1,
        delay
      );
    }
    else{
      setTimeout(()=>{
        updateTimer();
      }, delay);
    }
  }, delay);
}

function updateRoundDisplay() {
  roundDisplay.style.display="flex";
  roundDisplay.textContent = "ROUND " + roundDisplayNumber;
  startRound();
}
updateRoundDisplay();

function startRound(){
  setTimeout(() => {
    roundDisplay.style.display="none"; 
    displayCountdown(countdown3, 3, 1000);
  }, 1000);
}

function updateHealthPlayer(damage, comboMade, name){
  if(comboMade){
    healthBar.updateHealthPlayer(damage);
    console.log(healthBar.HealthPlayer());
    if(healthBar.HealthPlayer()>0){
      attackName.textContent=name.toUpperCase();
      attackDamage.textContent="-" + damage + "HP";
      attackName.style.display="flex";
      attackDamage.style.display="flex";
      setTimeout(()=> {attackName.style.display="none"; attackDamage.style.display="none"}, 1000);
    }
  }else{
    healthBar.updateHealthPlayer(10);
  }
  if(healthBar.emptyPlayer() && !roundIsEnded()){
    computerWins+=1;
    player2NameElement.textContent=computerPlaying ? "Computer" : "Player 2"
    endRound(player2NameElement.textContent);
  }
}

function updateHealthComputer(damage, comboMade, name){
  if(comboMade){
    healthBar.updateHealthComputer(damage);
    if(healthBar.HealthComputer()>0){
      attackName.textContent=name.toUpperCase();
      attackDamage.textContent="-" + damage + "HP";
      attackName.style.display="flex";
      attackDamage.style.display="flex";
      setTimeout(()=> {attackName.style.display="none"; attackDamage.style.display="none"}, 1000);
    }
  }else{
    healthBar.updateHealthComputer(10);
  }
  if(healthBar.emptyComputer() && !roundIsEnded()){
    playerWins+=1;
    endRound(playerName);
  }
}

function endRound(winner){
  clearTimeout(timer);
  
  clearPlayer1();
  clearPlayer2();

  initialRound+=1;
  roundDisplayNumber+=1;

  if(roundsInput==initialRound){
    playerWins > computerWins ? winnerMessage.textContent=playerName.toUpperCase() + " WINS" : 
    playerWins < computerWins ? winnerMessage.textContent=player2NameElement.textContent + " WINS" : winnerMessage.textContent="NOBODY WINS";
    
    gameOver.style.display="flex";
    winnerMessage.style.display="flex";

    addPlayers(playerName, player2NameElement.textContent);
    addScore(playerWins, computerWins);

    setTimeout(()=>{playAgain.style.display="flex"}, 2000);
    yesButton.addEventListener("click", ()=>{location.reload()});
    noButton.addEventListener("click", ()=>{window.location.href="main-menu.html"});
  }
  else{
    if(winner===undefined){
      winnerMessage.textContent="NOBODY WINS";
    }else{
      winnerMessage.textContent=winner.toUpperCase()+" WINS";
    }
    
    roundOver.style.display="flex";
    winnerMessage.style.display="flex";

    setTimeout(()=>{
      timeLeft=roundDurationInput;
      timerElement.textContent=timeLeft;

      updateRoundDisplay();

      roundOver.style.display="none";
      winnerMessage.style.display="none";

      healthBar.resetHealthPlayer();
      healthBar.resetHealthComputer();
    },3000);
  }

  if(winner!=undefined){
    if (currentPlayerIndex !== -1 && currentPlayerIndex < playerIndicators.length) {
      playerIndicators[currentPlayerIndex].style.backgroundColor = '#ff0000';
    }
    if (currentComputerIndex !== -1 && currentComputerIndex < computerIndicators.length) {
      computerIndicators[currentComputerIndex].style.backgroundColor = '#ff0000';
    }

    if (winner === playerName) {
      currentPlayerIndex = initialRound - 1;
      if (currentPlayerIndex < playerIndicators.length) {
        currentPlayer = playerIndicators[currentPlayerIndex];
        currentPlayer.style.backgroundColor = '#ff0000';
      }
    } else {
      currentComputerIndex = initialRound - 1;
      if (currentComputerIndex < computerIndicators.length) {
        currentComputer = computerIndicators[currentComputerIndex];
        currentComputer.style.backgroundColor = '#ff0000';
      }
    }
  }
}

function roundIsEnded() {
  return roundOver.style.display === 'flex' || gameOver.style.display === 'flex';
}

function updateTimer(){
  if(timeLeft>0){
    timeLeft--;
    timerElement.textContent=timeLeft;
    timer=setTimeout(updateTimer, 1000);
  }
  else{
    endRound();
  }
}

exitToMainMenu.addEventListener("click", () => {
    const userConfirm=confirm('Are you sure you want to quit the game?');
  
    if(userConfirm){
      window.location.href="main-menu.html";
    }
})

questionMarkButton.addEventListener("click", () =>{
  setMenuItems();

  if(isContainerVisible){
    attacksContainer.style.display="none";
  }else{
    attacksContainer.style.display="flex";
  }

  isContainerVisible=!isContainerVisible;
})