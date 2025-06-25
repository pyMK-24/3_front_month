const dishes = document.querySelectorAll(".dishes input[type=radio]");
const info = document.querySelector(".info");

for (const dish of dishes) {
    dish.addEventListener("change", (event) => {
        const id = event.target.id;
        switch (id) {
            case "pizza":
            info.textContent = "Pizza — Итальянская лепешка с томатным соусом, сыром и разными начинками (например, пепперони, овощи, грибы).";
            break;
            case "burger":
                info.textContent = "Burger — Американская классика: мясная котлета в булочке с соусами, салатом, сыром и другими добавками.";
                break;
            case "sushi":
                info.textContent = "Sushi — Японское блюдо из риса с уксусом, рыбой, морепродуктами и овощами, обычно подаётся с соевым соусом и васаби.";
                break;
            default:
                info.textContent = "";
        }
    info.style.display = "block"; 
    })
}
