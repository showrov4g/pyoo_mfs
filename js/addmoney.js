/**
 * 1. add event listener to the add money button (form submit);
 * 2. make sure to preventDefault so that page dose't reload;
 * 3. get the money user want to add and also get the pin number provided
 * 4. verify the pin number. for wrong pin number ===> failed to add money;  for right pin allow to add money to your wallet.
 * 5. get current balance
 * 6. add money to be added with current balance.
 * 7. Display/update the new balance in the UI/DOM
 *
 */

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // get money and the pin number
    let tkAmount = document.getElementById("amount").value;
    let pinNumber = document.getElementById("pin-number").value;
    if (pinNumber === "1234") {
      // add money to the account
      let balance = document.getElementById("account-balance").innerText;
      let balanceNumber = parseFloat(balance);
      let tkAmountNumber = parseFloat(tkAmount);
      let newBalance = balanceNumber + tkAmountNumber;
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money. Please try again letter");
    }
  });
