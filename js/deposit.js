document.getElementById("btn-deposit").addEventListener("click", function () {
  // get deposit input value from utility -> userInputValue function
  const depositAmount = userInputValue("deposit-amount");

  // get previous element which is changes
  const depositPreviousValue = previousValue("default-deposit");

  if (isNaN(depositAmount)) {
    alert("Please input valid Number");
    return;
  }

  const sumDeposit = depositPreviousValue + depositAmount;
  setTextElementValue("default-deposit", sumDeposit);

  // get previous main balance
  const mainBalancePreviousValue = previousValue("default-balance");

  // sum main balance
  const sumMainBalance = mainBalancePreviousValue + depositAmount;
  setTextElementValue("default-balance", sumMainBalance);
});
