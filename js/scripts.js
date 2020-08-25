function BankAccount(name, initialDeposit) {
  this.name = name;
  this.initialDeposit = initialDeposit;
}

function deposit(current, deposit) {
  return current + deposit
}

function withdrawal(current, withdraw) {
  return current - withdraw;
}

function displayCurrentBalance(currentBalance) {
  $("#balance").text(currentBalance);
}

$(document).ready(function() {
  let currentBalance;
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    const inputNewAccountName = $("input#new-account-name").val();
    const inputInitialDeposit = $("input#initial-deposit").val();

    $("input#new-account-name").val("");
    $("input#initial-deposit").val("");

    let newBankAccount = new BankAccount(inputNewAccountName, inputInitialDeposit);
    currentBalance = parseFloat(inputInitialDeposit)
    displayCurrentBalance(currentBalance);
  });
  $("form#deposit-withdraw").submit(function(event) {
    event.preventDefault();

    const plus = parseFloat($("input#deposit").val());
    const withdraw = parseFloat($("input#withdraw").val());

    currentBalance = deposit(currentBalance, plus);
    currentBalance = withdrawal(currentBalance, withdraw);
    displayCurrentBalance(currentBalance);
  });
});