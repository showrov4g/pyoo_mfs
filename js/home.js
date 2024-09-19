// event listener for button click
// add money to the account
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // prevent reload after from submit
    event.preventDefault();
    // get money to the added account
    let tkAmount = document.getElementById("amount").value;
    let pinNumber = document.getElementById("pin-number").value;

    // verify pin number
    if (pinNumber === "1234") {
        const balance = document.getElementById('account-balance').innerText;
        //  add tkAmount with balance
        const tkAmountNumber = parseFloat(tkAmount);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + tkAmountNumber;
        console.log(newBalance);

        // update the balance in the UI/ wallet
        document.getElementById('account-balance').innerText = newBalance;
         
    } else {
      alert("failed to add money to your wallet");
    }
  });
