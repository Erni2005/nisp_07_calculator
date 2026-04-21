const display = document.getElementById("display");

document.querySelectorAll("button").forEach(button => {
button.addEventListener("click", () => {

if (button.textContent === "C") {
    display.value = "";
} else if(button.textContent === "=") {
    calculate();
} else {
    display.value += button.textContent;
}

});
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function calculate() {

let expression = display.value;

if (expression.includes("+")) {

    let numbers = expression.split("+");

    display.value = add(
    parseFloat(numbers[0]),
    parseFloat(numbers[1])
);

}
    else if (expression.includes("-")) {
        let numbers = expression.split("-");
        display.value = subtract(
            parseFloat(numbers[0]),
            parseFloat(numbers[1])
        );
    }
}