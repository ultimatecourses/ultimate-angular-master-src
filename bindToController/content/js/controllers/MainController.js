function MainController() {
  this.firstCount = 0;
  this.secondCount = 5;
  this.thirdCount = 10;
}

angular
  .module('app')
  .controller('MainController', MainController);
