const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

button.addEventListener("click", () => {

let value = button.textContent;

if(value === "C"){
display.value = "";
}

else if(value === "="){
calculate();
}

else{
display.value += value;
}

});

});

function calculate(){

try {

let expression = display.value;

// potęgowanie ^
expression = expression.replace(/\^/g, "**");

display.value = eval(expression);

}

catch{
display.value = "Error";
}

}