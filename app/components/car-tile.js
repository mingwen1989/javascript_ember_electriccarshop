import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(car) {
      this.get('shoppingCart').add(car);
    }
  }
});
