/**
 * Below (commented out) are other supported
 * properties of the .component() method
 *
 * Remember: bindings: {} is a wrapper
 * for bindToController and scope: {}
 * so you never access $scope directly.
 * "$ctrl" is the default controllerAs name.
 */
var counter = {
  // templateUrl
  // controllerAs
  // transclude: true,
  // require: {
  //   parent: '^^parent'
  // },
  bindings: {
    count: '='
  },
  controller: function () {
    this.increment = function () {
      this.count++;
    };
    this.decrement = function () {
      this.count--;
    };
  },
  template: `
    <div class="todo">
      <button type="button" ng-click="$ctrl.decrement();">-</button>
      <input type="text" ng-model="$ctrl.count">
      <button type="button" ng-click="$ctrl.increment();">+</button>
    </div>
  `
};

angular
  .module('app')
  .component('counter', counter);
