let playerName;
let isClicked;
function addPlayer(element) {
    playerName = element.parentNode.parentNode.children[1].children[0].innerText;
    isClicked = element;
    // isClicked.style.backgroundColor = 'gray';
    isClicked.disabled = true;

    return playerName;
}

function countItems(listID) {
    let ol = document.getElementById(listID);
    let i = 0, itemCount = 0;
    while (ol.getElementsByTagName('li')[i++]) itemCount++;
    return itemCount;
}

document.getElementById('all-player').addEventListener('click', function (event) {
    const element = event.target;
    const playerList = document.getElementById('selected-player');

    // document.getElementById("player-btn").disabled = true;


    const playerNo = countItems('selected-player');
    if (playerNo === 5) {
        alert('Maximum player already added!')
        return;
    }

    const li = document.createElement('li');
    playerList.appendChild(li);
    li.innerText = addPlayer(element);
})


function getInputFieldValue(elementId) {
    const elementField = document.getElementById(elementId);
    const fieldValue = elementField.value;

    return fieldValue;
}

function getTextFieldValue(elementId) {
    const elementField = document.getElementById(elementId);
    const fieldValue = elementField.innerText;

    return fieldValue;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerCost = getInputFieldValue('per-player');
    if (isNaN(perPlayerCost)) {
        alert('Plese enter only integer number.')
    }
    const playerNo = countItems('selected-player');

    const totalPlayerCost = perPlayerCost * playerNo;

    const totalPlayerCostField = document.getElementById('player-cost');
    totalPlayerCostField.innerText = totalPlayerCost;
})

document.getElementById('total-btn').addEventListener('click', function () {
    const playerCost = parseInt(getTextFieldValue('player-cost'));

    const coachCost = parseInt(getInputFieldValue('coach'));
    if (isNaN(coachCost)) {
        alert('Plese enter only integer number.')
    }

    const managerCost = parseInt(getInputFieldValue('manager'));
    if (isNaN(managerCost)) {
        alert('Plese enter only integer number.')
    }

    const totalCost = playerCost + coachCost + managerCost;
    const totalCostField = document.getElementById('total-cost');
    totalCostField.innerText = totalCost;
})