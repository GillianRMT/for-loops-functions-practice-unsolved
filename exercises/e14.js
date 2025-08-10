// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let wrongBalance = [];
  for (let i = 0; i < array.length; i++) {
    let object = array[i];
    let sum = 0;
    if (object.hasOwnProperty("deposits") === true) {
      let deposits = object.deposits;
      for (let x = 0; x < deposits.length; x++) {
        sum += deposits[x];
      }
    }
    if (object.hasOwnProperty("withdrawals") === true) {
      let withdrawals = object.withdrawals;
      for (let y = 0; y < withdrawals.length; y++) {
        sum -= withdrawals[y];
      }
    }
    if (sum !== object.balance) {
      wrongBalance.push(object);
    }
  }
  return wrongBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
