const returnButton=document.getElementById("return");
const playerButtton=document.getElementById("PvP");
const computerButton=document.getElementById("PvC");

returnButton.addEventListener("click", () =>{
    window.location.href="main-menu.html";
})

playerButtton.addEventListener("click", () =>{
    window.location.href="fight.html";
    localStorage.setItem("playerPlaying", "true");
    localStorage.removeItem("computerPlaying");
})
computerButton.addEventListener("click", () =>{
    window.location.href="fight.html";
    localStorage.setItem("computerPlaying", "true");
    localStorage.removeItem("playerPlaying");
})