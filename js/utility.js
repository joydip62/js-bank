// take amount from input
function userInputValue(inputValue) {
  const inputAmount = document.getElementById(inputValue);
  const newAmountString = inputAmount.value;
  const newAmountNumber = parseFloat(newAmountString);
  // clear deposit field
  inputAmount.value = "";
  return newAmountNumber;
}

// get the previous value
function previousValue(value) {
  const previousElementValue = document.getElementById(value);
  const previousElementValueString = previousElementValue.innerText;
  const previousElementValueNumber = parseFloat(previousElementValueString);
  return previousElementValueNumber;
}

// calculated value change in previous value
function setTextElementValue(element, value) {
  const setNewValueInPreviousValue = document.getElementById(element);
  setNewValueInPreviousValue.innerText = value;
}
