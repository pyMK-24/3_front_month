const winter = document.getElementById("winter");
const spring = document.getElementById("spring");
const summer = document.getElementById("summer");
const autumn = document.getElementById("autumn");

function winterMonths() {
    const wintersArray = ["December", "January", "February"];

    const container = document.querySelector(".months");
    container.innerHTML = "";

    for (i = 0; i < wintersArray.length; i++) {
        const month = document.createElement("button");
        month.textContent = wintersArray[i];
        month.style.backgroundColor = "lightsteelblue";
        month.classList.add("month");
        container.appendChild(month);
    }
}

function SpringMonths() {
    const springArray = ["March", "April", "May"];

    const container = document.querySelector(".months");
    container.innerHTML = "";

    for (i = 0; i < springArray.length; i++) {
        const month = document.createElement("button")
        month.textContent = springArray[i];
        month.style.backgroundColor = "green";
        month.classList.add("month");
        container.appendChild(month);

    }
}

function summerMonths() {
    const summerArray = ["June", "July", "August"];

    const container = document.querySelector(".months");
    container.innerHTML = "";

    for (i = 0; i < summerArray.length; i++) {
        const month = document.createElement("button");
        month.textContent = summerArray[i];
        month.style.backgroundColor = "yellow";
        month.classList.add("month");
        container.appendChild(month);
    }
}

function autumnMonths() {
    const autumnArray = ["Semptember", "October", "November"]

    const container = document.querySelector(".months");
    container.innerHTML = "";

    for (i  = 0; i < autumnArray.length; i++) {
        const month = document.createElement("button");
        month.textContent = autumnArray[i];
        month.style.backgroundColor = "orange";
        month.classList.add("month");
        container.appendChild(month);
    }
}

winter.onclick = winterMonths;
spring.onclick = SpringMonths;
summer.onclick = summerMonths;
autumn.onclick = autumnMonths;
