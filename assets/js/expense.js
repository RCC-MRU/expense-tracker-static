let username = localStorage.getItem("Username");
let amount = localStorage.getItem("Amount");

console.log(username, amount);

let uname = document.getElementById("uname");
let balance = document.getElementById("balance");

uname.innerHTML = username;
balance.innerHTML = "₹" + amount;

// Add income
const addIncome = (ev) => {
  ev.preventDefault();
  // let expenseMoney = parseInt(
  //   document.getElementById("expense").innerHTML.slice(1)
  // );

  // let amountMoney = parseInt(
  //   document.getElementById("balance").innerHTML.slice(1)
  // );

  let amount = document.getElementById("transaction-amount").value;

  // console.log(amount);
  // console.log(balance);

  if (amount > 10000000) {
    alert("Amount should be within 1CR");
  } else {
    console.log("object");
    let text = document.getElementById("transaction-text").value;
    let table = document.getElementById("table");

    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerText = text;
    cell2.innerText = amount;
    cell3.innerHTML = `credit`;

    let x = parseInt(balance.innerHTML.slice(1));

    x = x + parseInt(amount);
    balance.innerHTML = "₹" + x;
  }
};

// Calculate the expense
const reduceExpense = (ev) => {
  ev.preventDefault();

  let expenseMoney = parseInt(
    document.getElementById("expense").innerHTML.slice(1)
  );

  // taking balance
  let x = parseInt(balance.innerHTML.slice(1));
  // let amountMoney = parseInt(
  //   document.getElementById("balance").innerHTML.slice(3)
  // );

  let amount = document.getElementById("transaction-amount").value;

  let text = document.getElementById("transaction-text").value;

  if (amount > x) {
    alert("Insufficient Balance");
    document.getElementById("transaction-amount").style.color = "red";

    setInterval(() => {
      document.getElementById("transaction-amount").style.color = "black";
    }, 3000);
  } else if (x >= amount) {
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerText = text;
    cell2.innerText = amount;
    cell3.innerHTML = `debit`;

    expenseMoney = expenseMoney + parseInt(amount);
    x = x - parseInt(amount);

    document.getElementById("expense").innerHTML = "₹" + expenseMoney;
    balance.innerHTML = "₹" + x;
  }
  console.log(expenseMoney);
};

const credit = document.getElementById("credit");
const debit = document.getElementById("debit");

document.addEventListener("DOMContentLoaded", () => {
  credit.addEventListener("click", addIncome);
});
document.addEventListener("DOMContentLoaded", () => {
  debit.addEventListener("click", reduceExpense);
});
