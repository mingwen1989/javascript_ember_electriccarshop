import Ember from 'ember';

export function cartPopup(params/*, hash*/) {
  // shoppingCart: Ember.inject.service()
  //
  // var car = params[0];
  // var cart = params[1].get('cars');
  //
  // if(params[0].get('cars').indexOf(params[1]) > -1) {
  //     return Ember.String.htmlSafe('<a href=""><img width="24" src="https://s31.postimg.org/xt4tpc57v/shopping_cart_button_2.png"></a>');
  // }
  //

  // cart.forEach(function(carModel){
  //   console.log(carModel._internalModel._data);
  //   if(carModel._internalModel._data === car) {
  //     return Ember.String.htmlSafe('<a href=""><img width="24" src="https://s31.postimg.org/xt4tpc57v/shopping_cart_button_2.png"></a>');
  //   }
  // });

  return params[0];

}


export default Ember.Helper.helper(cartPopup);
