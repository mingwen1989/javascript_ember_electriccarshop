import Ember from 'ember';

export default Ember.Component.extend({
  updateCarForm: false,
  actions: {
    updateCarForm() {
      this.set('updateCarForm', true);
    },
    updateCar(car) {
      var params = {
        make: this.get('make'),
        model: this.get('model'),
        price: this.get('price'),
        range: this.get('range'),
        description: this.get('description'),
        power: this.get('power'),
        type: this.get('type'),
        image: this.get('image'),
      };
      this.set('updateCarForm', false);
      this.sendAction('updateCar', car, params);
    }
  }
});
