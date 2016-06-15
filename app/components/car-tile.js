import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(car) {
      this.get('shoppingCart').add(car);
      // console.log(this.get('shoppingCart'));
      // console.log(this.get('shoppingCart').get('cars').indexOf(car));
      console.log(this.get('shoppingCart').get('cars').length);
    }
  }
});
