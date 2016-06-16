import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('view-cart');
  this.route('car-detail', {path: 'car-detail/:car_id'});
});

export default Router;
