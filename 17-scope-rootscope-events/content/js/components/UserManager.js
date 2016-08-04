var userManager = {
	bindings: {},
	controller: function ($rootScope, $scope) {
		var ctrl = this;
		ctrl.user = {
			name: '',
			email: ''
		};
		ctrl.loginUser = function () {
			$scope.$emit('login', ctrl.user);
		};
		var unbind = $rootScope.$on('logout', function (event, data) {
			console.log('$rootScope:', data);
		});
		$scope.$on('logout', function (event, data) {
			console.log('$scope:', data);
		});
		$scope.$on('$destroy', unbind);
	},
	template: `
		<form ng-submit="$ctrl.loginUser();" class="child">
			<div>
				Name: <input type="text" ng-model="$ctrl.user.name">
			</div>
			<div>
				Email: <input type="text" ng-model="$ctrl.user.email">
			</div>
			<button type="submit">
				Log in
			</button>
		</form>
	`
};

angular
	.module('app')
	.component('userManager', userManager);
