const answers = document.querySelectorAll(".accordian-answer");
const images = document.querySelectorAll(".accordian-question img");

images.forEach((image, index) => {

    image.addEventListener("click", () => {

        answers[index].classList.toggle("show");

        if (answers[index].classList.contains("show")) {
            image.src = "assets/images/icon-minus.svg";
        } else {
            image.src = "assets/images/icon-plus.svg";
        }

    });

});