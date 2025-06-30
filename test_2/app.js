const input = document.querySelector("#input");
let all = document.querySelector("#all");
let end = document.querySelector("#end");

let maxSymbols = 30;

input.addEventListener("input", () => {
    input.value = input.value.slice(0, maxSymbols)
    const textAll = input.value.length;
    all.textContent = textAll;
    end.textContent = maxSymbols - textAll;
});
