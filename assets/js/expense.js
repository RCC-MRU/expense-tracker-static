var table = document.getElementById("table");

let balance = 0;

const addIncome = (ev) => {
  ev.preventDefault();
  let expenseMoney = parseInt(
    document.getElementById("balance").innerHTML.slice(3)
  );
  let amountMoney = parseInt(
    document.getElementById("income").innerHTML.slice(3)
  );
  let amount = document.getElementById("amount").value;

  console.log(amount);
  console.log(amountMoney);
  
  if (amount > 10000000) {
    document.getElementById("amount").value = "Amount should be within 1CR";
  } else {
    let text = document.getElementById("info").value;
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerText = text;
    cell2.innerText = amount;
    cell3.innerHTML=`
    <i class="fa fa-arrow-up" aria-hidden="true"></i>
    
    `;
    amountMoney = amountMoney + parseInt(amount);
    document.getElementById("income").innerHTML = "Rs " + amountMoney;
  }
};

const reduceExpense = (ev) => {
  ev.preventDefault();
  
  let expenseMoney = parseInt(
    document.getElementById("balance").innerHTML.slice(3)
  );
  
  let amountMoney = parseInt(
    document.getElementById("income").innerHTML.slice(3)
  );
  
  let amount = document.getElementById("amount").value;
  
  let text = document.getElementById("info").value;
  
  if (amount > amountMoney) {
    document.getElementById("amount").value = "Insufficient Balance";
    document.getElementById("amount").style.color = "red";
    setInterval(() => {
      document.getElementById("amount").style.color = "black";
    }, 3000);
  } else if (amountMoney >= amount) {
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerText = text;
    cell2.innerText = amount;
    expenseMoney = expenseMoney + parseInt(amount);
    amountMoney = amountMoney - parseInt(amount);
    document.getElementById("balance").innerHTML = "Rs " + expenseMoney;
    document.getElementById("income").innerHTML = "Rs " + amountMoney;
  }
  console.log(expenseMoney);
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", addIncome);
});
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn1").addEventListener("click", reduceExpense);
});
