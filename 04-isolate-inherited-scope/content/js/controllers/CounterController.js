function CounterController($scope) {
	this.count = $scope.count;
	this.increment = function increment() {
		this.count++;
	};
	this.decrement = function decrement() {
		this.count--;
	};
}

angular
	.module('app')
	.controller('CounterController', CounterController);
