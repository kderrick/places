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
