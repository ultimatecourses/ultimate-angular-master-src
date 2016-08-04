function HTMLController() {
  this.reset = function () {
    this.content = '';
  };
}

angular
  .module('app')
  .controller('HTMLController', HTMLController);
