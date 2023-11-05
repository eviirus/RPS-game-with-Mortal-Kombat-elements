function linkedListFromArray(linkedList, array) {
  linkedList.clear();
  for (var i = 0; i < array.length; i++) {
    linkedList.add(array[i]);
  }
}

const listPlayersLeft = new buckets.LinkedList();
const listPlayersRight = new buckets.LinkedList();
const listScoreLeft = new buckets.LinkedList();
const listScoreRight = new buckets.LinkedList();

const storedPlayersLeft = JSON.parse(localStorage.getItem('playersLeft'));
const storedPlayersRight = JSON.parse(localStorage.getItem('playersRight'));
const storedScoreLeft = JSON.parse(localStorage.getItem('scoreLeft'));
const storedScoreRight = JSON.parse(localStorage.getItem('scoreRight'));

if (storedPlayersLeft) {
  linkedListFromArray(listPlayersLeft, storedPlayersLeft);
}
if (storedPlayersRight) {
  linkedListFromArray(listPlayersRight, storedPlayersRight);
}
if (storedScoreLeft) {
  linkedListFromArray(listScoreLeft, storedScoreLeft);
}
if (storedScoreRight) {
  linkedListFromArray(listScoreRight, storedScoreRight);
}

function addPlayers(player, player2) {
  listPlayersLeft.add(player);
  listPlayersRight.add(player2);
  checkSize();
}

function addScore(score, score2) {
  listScoreLeft.add(score);
  listScoreRight.add(score2);
  checkSize();
}

function checkSize(){
  if(listPlayersLeft.size()>5){
    listPlayersLeft.removeElementAtIndex(0);
    listPlayersRight.removeElementAtIndex(0);
    listScoreLeft.removeElementAtIndex(0);
    listScoreRight.removeElementAtIndex(0);
  }
  updateLocalStorage(); 
}

function updateLocalStorage() {
  localStorage.setItem('playersLeft', JSON.stringify(listPlayersLeft.toArray()));
  localStorage.setItem('playersRight', JSON.stringify(listPlayersRight.toArray()));
  localStorage.setItem('scoreLeft', JSON.stringify(listScoreLeft.toArray()));
  localStorage.setItem('scoreRight', JSON.stringify(listScoreRight.toArray()));
}
