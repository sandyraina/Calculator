let display = document.getElementById("display");

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  if (!isNaN(lastChar) || lastChar === '.') {
    display.value += operator;
  }
}

function appendDot() {
  const lastChar = display.value.slice(-1);
  if (lastChar !== '.') {
    display.value += '.';
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
