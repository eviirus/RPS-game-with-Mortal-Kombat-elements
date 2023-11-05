const kombatButton=document.getElementById("kombat");
const settingsButton=document.getElementById("settings");
const historyButton=document.getElementById("history");

kombatButton.addEventListener("click", ()=>{
    window.location.href="kombat.html";
})
settingsButton.addEventListener("click", ()=>{
    window.location.href="settings.html";
})
historyButton.addEventListener("click", ()=>{
    window.location.href="history.html";
})