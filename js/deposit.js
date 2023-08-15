document.getElementById("btn-deposit").addEventListener("click", function () {
  // get deposit input value
  const inputDepositAmount = document.getElementById("deposit-amount");
  const newDepositAmount = inputDepositAmount.value;

  // get default element which is changes
  const depositTotalElement = document.getElementById("default-deposit");
  const previousDepositTotal = depositTotalElement.innerText;

  // clear deposit field
  inputDepositAmount.value = "";

  if (isNaN(parseFloat(newDepositAmount))) {
    alert("Please input valid Number");
    return;
  }

  const sumDeposit = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
  depositTotalElement.innerText = sumDeposit;

  // get previous main balance
  const defaultBalance = document.getElementById("default-balance");
  const previousDefaultBalance = defaultBalance.innerText;

  // sum main balance
  const sumMainBalance = parseFloat(previousDefaultBalance) + parseFloat(newDepositAmount);
  defaultBalance.innerText = sumMainBalance;
});
