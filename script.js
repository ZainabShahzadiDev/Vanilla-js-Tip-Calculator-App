let billInput = document.querySelector(".billInput");
let reset = document.querySelector(".reset");
let selectButtons = document.querySelectorAll(".buttons button");
let numberOfPeopleInput = document.querySelector(".numberOfPeopleInput");
let peopleBox = document.querySelector(".numberOfPeople .input-box")
let tipAmount = document.querySelector(".tipAmount");
let totalAmount = document.querySelector(".totalAmount");
let error = document.querySelector(".error");
let customBtn = document.querySelector(".customBtn");



selectButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        if (billInput.value === "" || numberOfPeopleInput.value === "") {
            tipAmount.textContent = "$0.00";
            totalAmount.textContent = "$0.00";
            return;
        }

        let bill = Number(billInput.value);
        let people = Number(numberOfPeopleInput.value);


        if (numberOfPeopleInput.value !== "" && people === 0) {
            tipAmount.textContent = "$0.00";
            totalAmount.textContent = "$0.00";
            error.classList.add("show");
            peopleBox.classList.add("border-show");
            return;
        }

        error.classList.remove("show");
        peopleBox.classList.remove("border-show");

        let tipPercentage = btn.textContent;
        let tipPercentageNumber = Number(tipPercentage.replace("%", ""));

        let tip = (bill * tipPercentageNumber) / 100;
        tipAmount.textContent = `$${tip.toFixed(2)}`;
        let totalTip = bill + tip;
        let totalPerPerson = totalTip / people;
        totalAmount.textContent = `$${totalPerPerson.toFixed(2)}`;
    });
})

numberOfPeopleInput.addEventListener("input", () => {

    if (Number(numberOfPeopleInput.value) === 0) {
        error.classList.add("show");
        peopleBox.classList.add("border-show");

        tipAmount.textContent = "$0.00";
        totalAmount.textContent = "$0.00";
    } else {
        error.classList.remove("show");
        peopleBox.classList.remove("border-show");
    }

});


// customBtn.addEventListener("click", () => {
//     customBtn.textContent = 
// })


reset.addEventListener("click", (e) => {
    e.preventDefault();
    billInput.value = "";
    numberOfPeopleInput.value = "";

    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";

    peopleBox.classList.remove("border-show");
    error.classList.remove("show");
})

