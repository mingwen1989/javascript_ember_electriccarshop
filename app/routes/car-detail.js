import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('car', params.car_id);
  },
  actions: {
    destroyCar(car){
      car.destroyRecord();
      this.transitionTo('index');
    },

    updateCar(car, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          car.set(key,params[key]);
        }
      });
      car.save();
    },

    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var car = params.car;
      car.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return car.save();
      });
    }
  }
});
