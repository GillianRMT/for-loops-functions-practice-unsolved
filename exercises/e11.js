// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

// import { bankAccounts } from "../data/data.js";

export function getAllWithdrawals(array) {
  // Your code goes here...
  let everyoneWithdrawl = [];
  for (let i = 0; i < array.length; i++) {
    let totalWithdrawals = 0;
    let object = array[i];
    if (object.hasOwnProperty("withdrawals") === true) {
      let draw = object.withdrawals;
      for (let x = 0; x < draw.length; x++) {
        let withdrawal = draw[x];
        totalWithdrawals += Number(withdrawal);
      }
      everyoneWithdrawl.push(totalWithdrawals);
    } else {
      everyoneWithdrawl.push(0);
    }
  }
  return everyoneWithdrawl;
}

// console.log(getAllWithdrawals(bankAccounts));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
