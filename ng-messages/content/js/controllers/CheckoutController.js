function CheckoutController() {
  this.details = {
    username: '',
    password: '',
    coupon: 'summer-50'
  };
  this.onSubmit = function () {
    console.log(this.details);
  };
}

angular
  .module('app')
  .controller('CheckoutController', CheckoutController);
