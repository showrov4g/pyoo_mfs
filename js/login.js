// login button function add
// step-1 setup event handelar
document.getElementById("btn-login").addEventListener("click", function (event) {
    // step-2 prevent default behavior (prevent reloading browser)
    event.preventDefault();
    // step-3 get the phone number 
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    // this is not a perfect way . this is temporary
    // step-4 phone number and pin validation check 
    if(phoneNumber === "5" && pinNumber === "1234"){
        console.log('you are login');
        // step-5 allow user to use website
        window.location.href = '/home.html';
        
    }else{
        alert("wrong phone number or pin");
    }

});
