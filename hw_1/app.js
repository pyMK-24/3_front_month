const commandMoney = document.getElementById("command_money")
const commandEnergy = document.getElementById("command_energy")
const cyrcleButton = document.getElementById("circle")

commandMoney.textContent = 0;
commandEnergy.textContent = 200;

function hamster() {
    let money = Number(commandMoney.textContent);
    let energy = Number(commandEnergy.textContent);
    
    if (energy >= 5) {
        energy -= 5;
        money += 5;
    }
    commandMoney.textContent = money;
    commandEnergy.textContent = energy;

}

cyrcleButton.onclick = hamster;