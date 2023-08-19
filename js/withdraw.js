document.getElementById("btn-withdraw").addEventListener("click", function () {
  // get deposit input value from utility -> userInputValue function
  const withdrawAmount = userInputValue("withdraw-amount");

  // get previous element which is changes
  const withdrawPreviousValue = previousValue("default-withdraw");

  if (isNaN(withdrawAmount)) {
    alert("please provide valid number");
    return;
  }

  // get previous main balance
  const mainBalancePreviousValue = previousValue("default-balance");

  if (withdrawAmount > mainBalancePreviousValue) {
    alert("eto tk nei");
    return;
  }

  //  add in withdraw section
  const calculateTotalWithdraw = withdrawPreviousValue + withdrawAmount;
  setTextElementValue("default-withdraw", calculateTotalWithdraw);

  // deduct main balance
  const calculateMainBalance = mainBalancePreviousValue - withdrawAmount;
  setTextElementValue("default-balance", calculateMainBalance);
});
