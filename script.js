let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
document.addEventListener("keydown", function(event) {
    if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
        appendValue(event.key);
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
});