import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    saveCar() {
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
      this.sendAction('saveCar', params);
    },
    addToCart(car) {
      this.get('shoppingCart').add(car);
    }
  }
});
