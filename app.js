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

function calculate() {

let expression = display.value;

if (expression.includes("+")) {

    let numbers = expression.split("+");

    let result = add(
    parseFloat(numbers[0]),
    parseFloat(numbers[1])
);

display.value = result;
}

}