
if(playerPlaying){
  const player2=document.querySelector(".computer img");

  const leftButtons=document.querySelector(".buttons.left-buttons");
  leftButtons.style.display="none";
  optionsContainer.style.display="flex";

  player2NameElement.textContent="Player 2";

  const keyToOption1={
    'Q': 'rock',
    'W': 'paper',
    'E': 'scissors',
  };
  const keyToOption2={
    'I': 'rock',
    'O': 'paper',
    'P': 'scissors',
  };

  let player1Pressed=false, player2Pressed=false;
  let option1, option2;

  document.addEventListener("keydown", function(event){
    if(keyToOption1[event.key.toUpperCase()]){
      option1=keyToOption1[event.key.toUpperCase()];
      player1Pressed=true;
    }
    if(keyToOption2[event.key.toUpperCase()]){
      option2=keyToOption2[event.key.toUpperCase()];
      player2Pressed=true;
    }

    if(player1Pressed && player2Pressed){
      player.classList.add("shakePlayer");
      player2.classList.add("shakeComputer");

      setTimeout(() =>{
        player.classList.remove("shakePlayer");
        player2.classList.remove("shakeComputer");

        player.src="photos/"+option1+"Player.png";
        player2.src="photos/"+option2+"Computer.png";
        
        if(option1==='rock'){
          enqueuePlayer1('rock');
          if(option2==='paper'){
            enqueuePlayer2('paper');
            clearPlayer1();
            updateHealthPlayer();
          }else if(option2 === 'scissors'){
            enqueuePlayer2('scissors');
            clearPlayer2();
            updateHealthComputer();
          }
          else{
            enqueuePlayer2('rock');
            clearPlayer1();
            clearPlayer2();
          }
        }else if(option1 === 'paper'){
          enqueuePlayer1('paper');
          if(option2 === 'rock'){
            enqueuePlayer2('rock');
            clearPlayer2();
            updateHealthComputer();
          }else if(option2 === 'scissors'){
            enqueuePlayer2('scissors');
            clearPlayer1();
            updateHealthPlayer();
          }
          else{
            enqueuePlayer2('paper');
            clearPlayer1();
            clearPlayer2();
          }
        }else{
          enqueuePlayer1('scissors');
          if(option2 === 'rock'){
            enqueuePlayer2('rock');
            clearPlayer1();
            updateHealthPlayer();
          }else if(option2 === 'paper'){
            enqueuePlayer2('paper');
            clearPlayer2();
            updateHealthComputer();
          }
          else{
            enqueuePlayer2('scissors');
            clearPlayer1();
            clearPlayer2();
          }
        }
        player1Pressed=false;
        player2Pressed=false;
      }, 900);
    }
  });
}
else if(computerPlaying){
  optionsContainer.style.display="none";

  const computer = document.querySelector(".computer img");

  player2NameElement.textContent="Computer";

  options.forEach((option) => {
  option.addEventListener("click", () => {
    computer.classList.add("shakeComputer");
    player.classList.add("shakePlayer");

    setTimeout(() => {
      computer.classList.remove("shakeComputer");
      player.classList.remove("shakePlayer");

      player.src = "photos/" + option.innerHTML.toLowerCase() + "Player.png";

      const choice = ["rock", "paper", "scissors"];
      let arrayNo = Math.floor(Math.random() * 3);
      let computerChoice = choice[arrayNo];
      computer.src = "photos/" + computerChoice + "Computer.png";

      if (option.innerHTML.toLowerCase() === "rock") {
        enqueuePlayer1('rock');
        if (computerChoice === "paper"){
          enqueuePlayer2('paper');
          clearPlayer1();
          updateHealthPlayer();
        }
        else if (computerChoice === "scissors"){
          enqueuePlayer2('scissors');
          clearPlayer2();
          updateHealthComputer();
        }
        else{
          enqueuePlayer2('rock');
          clearPlayer1();
          clearPlayer2();
        }
      } else if (option.innerHTML.toLowerCase() === "paper") {
        enqueuePlayer1('paper');
        if (computerChoice === "scissors"){
          enqueuePlayer2('scissors');
          clearPlayer1();
          updateHealthPlayer();
        }
        else if (computerChoice === "rock"){
          enqueuePlayer2('rock');
          clearPlayer2();
          updateHealthComputer();
        }
        else{
          enqueuePlayer2('paper');
          clearPlayer1();
          clearPlayer2();
        }
      } else {
        enqueuePlayer1('scissors');
        if (computerChoice === "rock"){
          enqueuePlayer2('rock');
          clearPlayer1();
          updateHealthPlayer();
        }
        else if (computerChoice === "paper"){
          enqueuePlayer2('paper');
          clearPlayer2();
          updateHealthComputer();
        }
        else{
          enqueuePlayer2('scissors');
          clearPlayer1();
          clearPlayer2();
        }
      }
      
    }, 900);
  });
});
}