let username = localStorage.getItem("Username");
let amount = localStorage.getItem("Amount");

console.log(username, amount);

const uname = document.getElementById("uname");
const balance = document.getElementById("balance");

uname.innerHTML = username;
balance.innerHTML = amount;
