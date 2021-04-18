// let name=document.querySelector("#name");
// let balance=document.querySelector("#balance");

function validateForm() {
    let name=document.querySelector("#name");
    let balance=document.querySelector("#balance");
    if (name == "") {
      alert("Name must be filled out");
    }
    else if (balance == ""){
        alert("Balance must be filled out");
    }
  }