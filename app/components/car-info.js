import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  averageRating: 0,

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
  },

  // computed property method
  // userRating: Ember.computed('car.comments.[]', function() {
  //   // var self = this;
  //   var ratingCount = 0;
  //   var totalRatings = this.get('car.comments.length');
  //   return this.get('car.comments').then((comments) => {
  //     comments.forEach((comment) => {
  //       ratingCount += parseInt(comment.get('rating'));
  //     });
  //     var avg = ratingCount / totalRatings;
  //     console.log("inside computed property: " + avg);
  //     return avg;
  //     // self.set('averageRating', avg);
  //   });
  // }),

  // manually setting property once page is renderedd
  didInsertElement() {
    var self = this;
    var ratingCount = 0;
    var totalRatings = this.get('car.comments.length');
    return this.get('car.comments').then((comments) => {
      comments.forEach((comment) => {
        ratingCount += parseInt(comment.get('rating'));
      });
      self.set('averageRating', ratingCount / totalRatings);
    });
  }

});
