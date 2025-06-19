const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const reset = document.querySelector("#reset")
const command = document.querySelector("#command")

function counterPlus() {
    let count = Number(command.textContent);
    count += 1;
    command.style.color = "green";
    command.textContent = count;
}

function counterReset() {
    command.textContent = 0;
    command.style.color = "aqua";
}

function counterMinus() {
    let count = Number(command.textContent);
    count -= 1;
    command.textContent = count;

    if (count < 0) {
        command.style.color = "red";
    }else {
        command.style.color = "green";
    }
}

reset.onclick = counterReset;
plus.onclick = counterPlus;
minus.onclick = counterMinus;