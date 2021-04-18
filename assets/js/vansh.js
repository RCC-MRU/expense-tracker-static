// let inputName = document.getElementById("input-name").innerHTML;
// let balance = document.getElementById("input-amount").innerHTML;
// const btn = document.getElementById("btn");

// console.log("hello");

// const events = (e) => {
//   e.preventDefault();
//   console.log(inputName, balance);
//   if (inputName == "") {
//     alert("Name must be filled out");
//   } else if (balance == "") {
//     alert("Balance must be filled out");
//   }
// };

const validateForm = (e) => {
  // e.preventDefault();
  let inputName = document.getElementById("input-name").value;
  let balance = document.getElementById("input-amount").value;
  const btn = document.getElementById("btn");

  // console.log(inputName);
  // console.log(balance);

  if (inputName == "") {
    alert("Name must be filled out");
  } else if (balance == "") {
    alert("Balance must be filled out");
  } else {
    localStorage.setItem("Username", inputName);
    localStorage.setItem("Amount", balance);

    location.href = "../popupLogin/index.html"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", validateForm);
});
