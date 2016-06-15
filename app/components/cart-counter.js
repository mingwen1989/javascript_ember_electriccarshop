import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    itemCount() {
      // console.log(this.get('shoppingCart'));
      // return this.get('shoppingCart').get('cars').length;
    }
  }
});
