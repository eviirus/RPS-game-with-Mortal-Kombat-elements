const returnButton=document.getElementById("return");
returnButton.addEventListener("click", () =>{
    /*localStorage.removeItem('playersLeft');
    localStorage.removeItem('playersRight');
    localStorage.removeItem('scoreLeft');
    localStorage.removeItem('scoreRight');*/
    window.location.href="main-menu.html";
})

const playerLeftArray=Array.from(document.getElementsByClassName("playerNameLeft"));
const playerRightArray=Array.from(document.getElementsByClassName("playerNameRight"));
const playerLeftScoreArray=Array.from(document.getElementsByClassName("playerScoreLeft"));
const playerRightScoreArray=Array.from(document.getElementsByClassName("playerScoreRight"));

const playersLeft = JSON.parse(localStorage.getItem('playersLeft'));
const playersRight = JSON.parse(localStorage.getItem('playersRight'));
const scoreLeft = JSON.parse(localStorage.getItem('scoreLeft'));
const scoreRight = JSON.parse(localStorage.getItem('scoreRight'));


for(let i=0;i<playerLeftArray.length;i++){
    playerLeftArray[i].style.display="none";
    playerRightArray[i].style.display="none";
    playerLeftScoreArray[i].style.display="none";
    playerRightScoreArray[i].style.display="none";
}

function updateHistory(){
    for(let i=0;i<playersLeft.length;i++){
        playerLeftArray[i].textContent=playersLeft[i];
        playerRightArray[i].textContent=playersRight[i];
        playerLeftScoreArray[i].textContent=scoreLeft[i];
        playerRightScoreArray[i].textContent=scoreRight[i];
    
        playerLeftArray[i].style.display="flex";
        playerRightArray[i].style.display="flex";
        playerLeftScoreArray[i].style.display="flex";
        playerRightScoreArray[i].style.display="flex";
    }
}
updateHistory();

