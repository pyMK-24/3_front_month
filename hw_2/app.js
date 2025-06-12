const redButton = document.getElementById("red");
const yellowButton = document.getElementById("yellow"); 
const greenButton = document.getElementById("green");
const commandText = document.getElementById("command");

function turnRed() {
    commandText.textContent = "STOP";
    commandText.style.color = "red";
    redButton.classList.add("active");
    yellowButton.classList.remove("active");
    greenButton.classList.remove("active");
}

function turnYellow() {
    commandText.textContent = "WAIT";
    commandText.style.color = "yellow";
    yellowButton.classList.add("active");
    redButton.classList.remove("active");
    greenButton.classList.remove("active");
}

function turnGreen() {
    commandText.textContent = "GO";
    commandText.style.color = "green";
    greenButton.classList.add("active");
    redButton.classList.remove("active");
    yellowButton.classList.remove("active");
}

function clearCommand() {
    commandText.textContent = "";
    commandText.style.color = "gray";
    yellowButton.classList.remove("active");
    greenButton.classList.remove("active");
    redButton.classList.remove("active");
}

redButton.onmouseover = turnRed;
yellowButton.onmouseover = turnYellow;
greenButton.onmouseover = turnGreen;

redButton.onmouseleave = clearCommand;
yellowButton.onmouseleave = clearCommand;
greenButton.onmouseleave = clearCommand;