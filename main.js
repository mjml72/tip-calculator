const numberOfPeople = document.getElementById("people-number");
const demo = document.getElementById("demo");
const tipPercentButton = document.getElementsByClassName("btn-percentage");
const custom = document.getElementById("custom");
const tipAmount = document.getElementById("tip-amount");
const reset = document.getElementById("btn-reset");
const total = document.getElementById("total");
const bill = document.getElementById("bill");




for (let i = 0; i < tipPercentButton.length; i++) {

    tipPercentButton[i].addEventListener("click", calculator);

}



custom.addEventListener("input", calculator);
custom.addEventListener("focus", calculator);


/* Función que realiza y muestra los cálculos*/
function calculator(event) {

    checking();

    if (event.target.id === "custom" && event.target.value === "") {
        return;
    }

    let tip = event.target.value;

    if (numberOfPeople.value !== "" && bill.value !== "" && numberOfPeople.value != 0 && bill.value != 0) {
        
        let peopleNumber = parseInt(numberOfPeople.value);
        let billAmount = parseFloat(bill.value);
        let tipPercent = parseFloat(tip);
        
        let totalTip = billAmount * (tipPercent / 100);
        let tipAmountPerson = totalTip / peopleNumber;
        let totalAmount = billAmount + totalTip;
        let totalAmountPerson = totalAmount / peopleNumber;

        tipAmount.innerHTML = "$" + tipAmountPerson.toFixed(2);
        total.innerHTML = "$" + totalAmountPerson.toFixed(2);

    }


}




/* Reset el tip calculator */
reset.addEventListener("click", function () {

    document.getElementById("bill").value = "";
    document.getElementById("people-number").value = "";
    tipAmount.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
    custom.value = "";
})



/*  Checkea si el número de personas es cero*/
function checking() {

    if (numberOfPeople.value == 0 || numberOfPeople.value === "") {
        numberOfPeople.style.border = "2px solid rgb(203, 80, 80)";
        demo.style.opacity = "1";
    } else {
        numberOfPeople.style.border = "none";
        demo.style.opacity = "0";
    }

}


numberOfPeople.addEventListener("input", checking);

