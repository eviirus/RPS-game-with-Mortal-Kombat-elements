const names = [];
const damages = [];
const conditions = [];

async function readJSON() {
    try {
        const response = await fetch('json/counter-attacks.json');
        const data = await response.json();
        let counterAttacks = data["counter-attacks"];

        for (let i = 0; i < counterAttacks.length; i++) {
            let counterAttack = counterAttacks[i];
            names.push(counterAttack.name);
            damages.push(counterAttack.damage);
            conditions.push(counterAttack.condition);
        }

        console.log("Names: ", names);
        console.log("Damages: ", damages);
        console.log("Conditions: ", conditions);
    } catch (error) {
        console.error('Error reading JSON: ', error);
    }
}
readJSON();

function setMenuItems(){
    for(let i=0;i<conditions.length;i++){
        attackNameArray[i].textContent=names[i];
        damageArray[i].textContent=damages[i];
        conditionArray[i].textContent=conditions[i];
    }
}

const queuePlayer1 = new buckets.Queue();
const queuePlayer2 = new buckets.Queue();

function enqueuePlayer1(option) {
    if(queuePlayer1.toArray().length>=4){
        clearPlayer1();
    }
    queuePlayer1.enqueue(option);
    checkArray(queuePlayer1);
}

function enqueuePlayer2(option) {
    if(queuePlayer2.toArray().length>=4){
        clearPlayer2();
    }
    queuePlayer2.enqueue(option);
    checkArray(queuePlayer2);
}

function clearPlayer1() {
    queuePlayer1.clear();
}

function clearPlayer2() {
    queuePlayer2.clear();
}

let comboMade=false;

function checkArray(player){
    for(let i=0;i<conditions.length;i++){
        if(arraysHaveSameElements(player.toArray(), conditions[i])){
            if(player===queuePlayer1){
                comboMade=true;
                updateHealthComputer(damages[i], comboMade, names[i]);
                clearPlayer1();
            }
            else if(player===queuePlayer2){
                comboMade=true;
                updateHealthPlayer(damages[i], comboMade, names[i]);
                clearPlayer2();
            }
            console.log("YES: ", names[i])
        }
        else{
            console.log("NO: ", player.toArray());
        }
    }
    comboMade=false;
}

function arraysHaveSameElements(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const sortedArr1 = arr1.slice().sort();
    const sortedArr2 = arr2.slice().sort();

    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false;
        }
    }

    return true;
}