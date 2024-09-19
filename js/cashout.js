document
  .getElementById("btn-cashout")
  .addEventListener("click", function (event) {
    event.preventDefault();
   let casOut = document.getElementById("cashout-amount").value;
   let pin = document.getElementById('cashout-pin').value;
//    wrong way to verify pin number 
    if (pin === '1234') {
        let balance = document.getElementById('account-balance').innerText;
        let balanceNumber = parseFloat(balance);
        let cashoutNumber = parseFloat(casOut);
        // reduce blance 
        let newBalance = balanceNumber - cashoutNumber;
        // update balance to the Ul 
        document.getElementById('account-balance').innerText = newBalance;
    }else{
        alert('failed to Cash Out money to your wallet. Plese try again leter')
    }
   

  });
