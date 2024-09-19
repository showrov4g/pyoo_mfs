// event listener for button click 
// add money to the account
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent reload after from submit 
    event.preventDefault();
    // get money to the added account 
    let tkAmount = document.getElementById('amount').value;
    let pinNumber = document.getElementById('pin-number').value;

    // verify pin number 
    if(pinNumber === '1234'){
        console.log('adding money to your wallet')
    }else{
        alert('failed to add money to your wallet')
    }
})
