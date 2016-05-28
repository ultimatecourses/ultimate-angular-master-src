function CounterController() {
	this.count = 0;
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
