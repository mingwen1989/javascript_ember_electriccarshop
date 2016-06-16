import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(car) {
      this.get('shoppingCart').add(car);
    },
    destroyCar(car) {
      if (confirm('Are you sure you want to delete this car?')) {
      this.sendAction('destroyCar', car);
      }
    },
    updateCar(car, params) {
      this.sendAction('updateCar', car, params);
    },
    saveComment(params) {
      this.sendAction('saveComment', params);
    }
  }
});
