const password = document.querySelector("#password");
const refresh = document.querySelector("#refresh");

refresh.addEventListener("click", function() {
    const arrayNumbers = Array(4).fill(0);
    let passwordArray = arrayNumbers.map(() => Math.floor(Math.random() * 10));
    passwordArray = passwordArray.join('');
    password.textContent = passwordArray;
})
