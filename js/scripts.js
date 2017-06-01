$(document).ready(function() {
  $("#order").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var productInput = $("#product").val();

    $(".person").text(nameInput);
    $(".address1").text(addressInput);
    $(".product1").text(productInput);

    $("#receipt").show();

    event.preventDefault();
  });
});
