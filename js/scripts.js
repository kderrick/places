function Place (country, landmark, month, year, notes) {
  this.country = country;
  this.landmark = landmark;
  this.month = month;
  this.year = year;
  this.notes = notes;
};

Place.prototype.placeDate = function () {
  return this.country + " " + this.month + ", " + this.year ;
}

$(document).ready(function(){
  $('form#new-place').submit(function(event){
    event.preventDefault();

    var inputCountry = $("input#new-country").val();
    var inputLandmark = $("input#new-landmark").val();
    var inputMonth = $("input#new-month").val();
    var inputYear = $("input#new-year").val();
    var inputNotes =$("input#new-notes").val();
    var newPlace = new Place(inputCountry, inputLandmark, inputMonth, inputYear, inputNotes);

    $("ul#places").append("<li><span class = 'listPlace'>" + newPlace.placeDate() + "</span></li>");

    $("input#new-country").val("");
    $("input#new-landmark").val("");
    $("input#new-month").val("");
    $("input#new-year").val("");
    $("input#new-notes").val("");

    $(".listPlace").last().click(function(){
      $("#show-places").show();
      $("#show-places h2").text(newPlace.placeDate());
      $(".landmark").text(newPlace.landmark);
      $(".notes").text(newPlace.notes);
      });
   });
});
