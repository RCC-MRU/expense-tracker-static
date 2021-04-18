const validateForm = (e) => {
  let inputName = document.getElementById("input-name").value;
  let balance = document.getElementById("input-amount").value;
  const btn = document.getElementById("btn");

  if (inputName == "") {
    alert("Name must be filled out");
  } else if (balance == "") {
    alert("Balance must be filled out");
  } else {
    localStorage.setItem("Username", inputName);
    localStorage.setItem("Amount", balance);

    window.location.href = 'file.html';
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", validateForm);
});
