function MainController() {
  this.count = 5;
}

angular
  .module('app')
  .controller('MainController', MainController);
