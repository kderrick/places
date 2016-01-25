describe("Place", function(){
  it("will create a new place with the given properties", function() {
    var testPlace = new Place("France", "Eiffel Tower", "March", "It was fun!");
    expect(testPlace.country).to.equal("France");
    expect(testPlace.landmark).to.equal("Eiffel Tower");
    expect(testPlace.month).to.equal("March");
    expect(testPlace.notes).to.equal("It was fun!");
  
  });
});
