document.getElementById("btn-withdraw").addEventListener("click", function () {
  // get withdraw input value
  const inputWithdrawAmount = document.getElementById("withdraw-amount");
  const newWithdrawAmount = inputWithdrawAmount.value;
  const convertIntNewWithdrawAmount = parseFloat(newWithdrawAmount)

  // get default element which is changes
  const withdrawTotalElement = document.getElementById("default-withdraw");
  const previousWithdrawTotal = withdrawTotalElement.innerText;
  const convertIntPreviousWithdrawTotal = parseFloat(previousWithdrawTotal)

  // clear deposit field
  inputWithdrawAmount.value = "";

  if (isNaN(convertIntNewWithdrawAmount)) {
    alert("please provide valid number");
    return;
  }

  // get previous main balance
  const defaultBalance = document.getElementById("default-balance");
  const previousDefaultBalance = defaultBalance.innerText;
  const convertIntPreviousDefaultBalance = parseFloat(previousDefaultBalance);
  

  if (convertIntNewWithdrawAmount > convertIntPreviousDefaultBalance) {
    alert("eto tk nei");
    return;
  }

  //  add in withdraw section
  const sumWithdraw = convertIntPreviousWithdrawTotal + convertIntNewWithdrawAmount;
  withdrawTotalElement.innerText = sumWithdraw;

  // deduct main balance
  const sumMainBalance = convertIntPreviousDefaultBalance - convertIntNewWithdrawAmount;
  defaultBalance.innerText = sumMainBalance;
});
