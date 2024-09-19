// show the cash out form
document
  .getElementById("cash-out-display")
  .addEventListener("click", function () {
    // show cash out buttin clicked
    document.getElementById("cash-out-form").classList.remove("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
  });
//  add money form display option

document
  .getElementById("add-money-display")
  .addEventListener("click", function () {
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("add-money-form").classList.remove("hidden");
  });
