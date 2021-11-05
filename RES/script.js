$(document).ready(function(){

   let expenses = 0;
   let totalBudget = 0;

   $("#calculateButt").click(function() {
      totalBudget = $("#budgetText").val();
      $("#budgetNum").html(totalBudget);
      $("#budgetText").val("");
   });

   $("#addExpense").click(function() {
      expenses = Number(expenses) + Number($("#expenseAmmount").val());
      $("#expensetNum").html(expenses);
      $("#expenseAmmount").val("");
      $("#expenseName").val("");
   });
});