$(document).ready(function() {
  $("#formLetter").submit(function(event) {
    var personInput = $("input#person").val();

    $(".person").text(personInput);

    $("#letter").show();

    event.preventDefault();
  });
});
