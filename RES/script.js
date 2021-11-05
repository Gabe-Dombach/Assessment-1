$(document).ready(function(){
   $("#calculateButt").click(function() {
      let x = $("#budgetText").val();
      $("#budgetNum").html(x);
   });
});