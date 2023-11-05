const roundsInput = document.getElementById("rounds");
const roundDurationInput = document.getElementById("round-duration");
const playerName = document.getElementById("player-name");
const submitButton = document.getElementById("submit");

const savedRounds = localStorage.getItem("roundsInput");
const savedDuration = localStorage.getItem("roundDurationInput");
const savedPlayerName = localStorage.getItem("playerName");

if (savedRounds) {
    roundsInput.value = savedRounds;
}
if (savedDuration) {
    roundDurationInput.value = savedDuration;
}
if (savedPlayerName) {
    playerName.value = savedPlayerName;
}

roundsInput.addEventListener("input", (event) => {
    if (parseInt(event.target.value) > 10) {
        event.target.value = 10;
    }
    localStorage.setItem("roundsInput", event.target.value);
});

roundDurationInput.addEventListener("input", (event) => {
    if (parseInt(event.target.value) > 90) {
        event.target.value = 90;
    }
    localStorage.setItem("roundDurationInput", event.target.value);
});

playerName.addEventListener("input", (event) => {
    localStorage.setItem("playerName", event.target.value);
});

submitButton.addEventListener("click", () => {
    window.location.href = "main-menu.html";
});