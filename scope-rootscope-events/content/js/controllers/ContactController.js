function ContactController($rootScope, $scope) {
	var ctrl = this;
	ctrl.contacts = [];
	ctrl.logoutUser = function () {
		$rootScope.$emit('logout', ctrl.contacts);
	};
	$scope.$on('login', function (event, data) {
		ctrl.contacts.push(data);
	});
}

angular
	.module('app')
	.controller('ContactController', ContactController);
