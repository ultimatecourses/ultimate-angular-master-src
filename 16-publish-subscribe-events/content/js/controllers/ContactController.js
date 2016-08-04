function ContactController($scope) {
	var ctrl = this;
	ctrl.contacts = [];
	ctrl.logoutUser = function () {
		$scope.$broadcast('logout', ctrl.contacts);
	};
	$scope.$on('login', function (event, data) {
		ctrl.contacts.push(data);
	});
}

angular
	.module('app')
	.controller('ContactController', ContactController);
