let billInput = document.querySelector(".billInput");
let reset = document.querySelector(".reset");
let selectButtons = document.querySelectorAll(".buttons button");
let numberOfPeopleInput = document.querySelector(".numberOfPeopleInput");
let peopleBox = document.querySelector(".numberOfPeople .input-box")
let tipAmount = document.querySelector(".tipAmount");
let totalAmount = document.querySelector(".totalAmount");
let customBtn = document.querySelector(".customBtn");



selectButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        if (billInput.value === "" || numberOfPeopleInput.value === "") {
            return;
        }

        let bill = Number(billInput.value);
        let people = Number(numberOfPeopleInput.value);


        let tipPercentage = btn.textContent;
        let tipPercentageNumber = Number(tipPercentage.replace("%", ""));

        if (people === 0) {
            peopleBox.style.border = "2px solid orange";
            return;
        }

        peopleBox.style.border = "";

        let tip = (bill * tipPercentageNumber) / 100;
        tipAmount.textContent = `$${tip.toFixed(2)}`;
        let totalTip = bill + tip;
        let totalPerPerson = totalTip / people;
        totalAmount.textContent = `$${totalPerPerson.toFixed(2)}`;
    });



})

// customBtn.addEventListener("click", () => {
//     customBtn.textContent = 
// })


// function numberOfPeopleInputBox() {
// }

reset.addEventListener("click", (e) => {
    e.preventDefault();
    billInput.value = "";
    numberOfPeopleInput.value = "";

    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";

    peopleBox.style.border = "";
})

