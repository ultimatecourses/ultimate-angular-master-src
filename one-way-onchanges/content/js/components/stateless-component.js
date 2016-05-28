var statelessComponent = {
	bindings: {
    user: '<',
    onUpdate: '&'
  },
  controller: function () {
    this.$onChanges = function (changes) {
      if (changes.user) {
        this.user = angular.copy(this.user);
      }
    };
    this.updateUser = function () {
      this.onUpdate({
        $event: {
          user: this.user
        }
      });
    };
  },
  template: `
  	<div>
    	<input type="text" ng-model="$ctrl.user.name">
      <input type="text" ng-model="$ctrl.user.location">
      <a href="" ng-click="$ctrl.updateUser();">Update</a>
    </div>
  `
};

angular
	.module('app')
	.component('statelessComponent', statelessComponent);
