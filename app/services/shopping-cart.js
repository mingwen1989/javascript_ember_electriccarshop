import Ember from 'ember';

export default Ember.Service.extend({
  cars: [],
  total: 0,
  carCount: 0,

  add(car) {
    this.get('cars').pushObject(car);
    this.set('total', parseInt(this.get('total')) + parseInt(car.get('price')));
    this.set('carCount', parseInt(this.get('carCount')) + 1);
  }

});
