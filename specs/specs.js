describe("Place", function(){
  it("will create a new place with the given properties", function() {
    var testPlace = new Place("France", "Eiffel Tower", "March", "2004", "It was fun!");
    expect(testPlace.country).to.equal("France");
    expect(testPlace.landmark).to.equal("Eiffel Tower");
    expect(testPlace.month).to.equal("March");
    expect(testPlace.year).to.equal("2004");
    expect(testPlace.notes).to.equal("It was fun!");
  });
  it("create placeDate method that concatnates country, month, year", function(){
    var testPlace = new Place("France", "Eiffel Tower", "March", "2004", "It was fun!");
    expect(testPlace.placeDate()).to.equal("France March, 2004");
  });
});
