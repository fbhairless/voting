$(function() {
  $("#age form").submit(function(event) {
    var voterAge = $('input#voterAge').val();
      if (parseInt(voterAge) < 18) {
        $("#overSeventeen").hide();
        $("#underEighteen").show();
      }
      else {
        $("#underEighteen").hide();
        $("#overSeventeen").show();
      }
      event.preventDefault();
    });
});
