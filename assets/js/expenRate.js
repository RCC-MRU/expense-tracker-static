const update = require("update");
const draw = require("draw");

const balance = document.getElementById("balance");
const expense = document.getElementById("expense");
const expenseRate = document.getElementById("expense-rate");

const modelAdd = document.getElementById("model-add");

document.addEventListener("DOMContentLoaded", () => {
  expenseRate.addEventListener("click", calculateExpenseRate);
});

// calculating expense rate

function calculateExpenseRate(balance, expense) {
  modelAdd.innerHTML = "hello world";
  // let expenRate = (expense / balance) * 100;

  // if (expenRate <= 40) {
  //   `<div class="modal fade" id="expense-modal" tabindex="-1" role="dialog" aria-labelledby="expense-modal" aria-hidden="true">
  //   <div class="modal-dialog modal-dialog-centered" role="document">
  //     <div class="modal-content">
  //       <div class="modal-header">
  //         <h5 class="modal-title" id="exampleModalLongTitle">Expenditure Rate</h5>
  //         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
  //           <span aria-hidden="true">&times;</span>
  //         </button>
  //       </div>
  //       <div class="modal-body">
  //         <p>Your expenditure Rate is ${expenRate}. Congratulations!!</p>
  //       </div>
  //       <div class="modal-footer">
  //         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
  //       </div>
  //     </div>
  //   </div>
  // </div>`;
  //calling confetti.js here
  // } else {
  //   `<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  //   <div class="modal-dialog modal-dialog-centered" role="document">
  //     <div class="modal-content">
  //       <div class="modal-header">
  //         <h5 class="modal-title" id="exampleModalLongTitle">Expenditure Rate</h5>
  //         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
  //           <span aria-hidden="true">&times;</span>
  //         </button>
  //       </div>
  //       <div class="modal-body">
  //         <p>Your expenditure Rate is ${expenRate}. Get A Hold On Yourself!!</p>
  //       </div>
  //       <div class="modal-footer">
  //         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
  //       </div>
  //     </div>
  //   </div>
  // </div>`;
  // }
}
