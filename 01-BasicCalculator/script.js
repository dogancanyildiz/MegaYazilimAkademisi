document.addEventListener("DOMContentLoaded", function () {
    var display = document.querySelector("input[name='display']");

    function addToDisplay(buttonValue) {
        display.value += buttonValue;
    }

    function clearDisplay() {
        display.value = "";
    }

    function removeLastCharacter() {
        display.value = display.value.slice(0, -1);
    }

    function calculateResult() {
        try {
            display.value = calculate(display.value);
        } catch (error) {
            display.value = "Hata";
        }
    }

    function calculate(expression) {
        return Function('"use strict";return (' + expression + ')')();
    }

    document.querySelectorAll("input[type='button']").forEach(function (button) {
        button.addEventListener("click", function () {
            switch (button.value) {
                case "AC":
                    clearDisplay();
                    break;
                case "C":
                    removeLastCharacter();
                    break;
                case "=":
                    calculateResult();
                    break;
                default:
                    addToDisplay(button.value);
                    break;
            }
        });
    });
});