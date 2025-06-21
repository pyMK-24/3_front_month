const image = document.querySelectorAll(".image");
function Slider() {
    for (let i = 0; i < image.length; i++) {
        image[i].addEventListener("click", function() {
            for (let j =0; j < image.length; j++){
                image[j].classList.remove("active");
            }
        image[i].classList.add("active");
        })
    }
}

Slider()



