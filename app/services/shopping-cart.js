import Ember from 'ember';

export default Ember.Service.extend({
  cars: [],
  total: 0,

  add(car) {
    // var temp = parseInt(this.get('total')) + car._internalModel._data.price;
    // console.log(temp);
    this.get('cars').pushObject(car);
    this.set('total', parseInt(this.get('total')) + parseInt(car._internalModel._data.price));
    // console.log(this.get('total'));
  }

});
