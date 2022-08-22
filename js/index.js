let playerName;
function addPlayer(element) {
    playerName = element.parentNode.parentNode.children[1].children[0].innerText;
    return playerName;
}

function countItems(listID) {
    var ol = document.getElementById(listID);
    var i = 0, itemCount = 0;
    while (ol.getElementsByTagName('li')[i++]) itemCount++;
    return itemCount;
}

document.getElementById('all-player').addEventListener('click', function (event) {
    const element = event.target;
    const playerList = document.getElementById('selected-player');
    const li = document.createElement('li');
    li.innerText = addPlayer(element);

    playerList.appendChild(li);
    const playerNo = countItems('selected-player');
    if (playerNo === 5) {
        return alert('Maximum player added!')
    }
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
    const playerNo = countItems('selected-player');

    const totalPlayerCost = perPlayerCost * playerNo;

    const totalPlayerCostField = document.getElementById('player-cost');
    totalPlayerCostField.innerText = totalPlayerCost;
})

document.getElementById('total-btn').addEventListener('click', function () {
    const playerCost = parseInt(getTextFieldValue('player-cost'));
    console.log(playerCost);
    const coachCost = parseInt(getInputFieldValue('coach'));
    console.log(coachCost);
    const managerCost = parseInt(getInputFieldValue('manager'));
    console.log(managerCost);

    const totalCost = playerCost + coachCost + managerCost;
    console.log(totalCost)

    const totalCostField = document.getElementById('total-cost');
    totalCostField.innerText = totalCost;

})