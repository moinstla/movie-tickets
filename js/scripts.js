function Ticket(age, time) {
  this.age = age;
  this.time = time;
}

Ticket.prototype.ticketPrice = function () {
  return 10 - this.age - this.time;
}

$(function() {
  $("select").children("option:first-child").hide();

  $("form").submit(function(event) {
    event.preventDefault();
    var inputtedTitle=$("#title").val();
    var inputtedAge=parseInt($("#age").val());
    var inputtedTime=parseInt($("#time").val());
    var newTicket= new Ticket (inputtedAge, inputtedTime);

    $(".movie").text(inputtedTitle);
    $(".price").text(newTicket.ticketPrice());
    $("#result").show();
  });
});
