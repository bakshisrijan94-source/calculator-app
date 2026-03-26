let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let result = eval(display.value);

        // Add to history
        let li = document.createElement("li");
        li.textContent = display.value + " = " + result;
        li.onclick = function() {
            display.value = result; // click to reuse
        }
        historyList.appendChild(li);

        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// Clear all history
function clearHistory() {
    historyList.innerHTML = "";
}

// Keyboard support
document.addEventListener("keydown", function(event) {
    if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
        appendValue(event.key);
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
});