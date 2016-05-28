function CounterController($scope) {
	this.count = 0;
	this.name = 'Drink counter';
	this.updateName = function () {
		this.name = 'Food counter';
	};
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
