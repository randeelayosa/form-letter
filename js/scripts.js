$(document).ready(function() {
  $("#formLetter").submit(function(event) {
    var personInput = $("input#person").val();

    $(".person").text(personInput);

    $(".form-group").fadeToggle();

    $("#letter").fadeToggle();

    event.preventDefault();
  });
});
