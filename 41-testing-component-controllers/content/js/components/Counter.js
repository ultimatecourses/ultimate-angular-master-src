var counter = {
	bindings: {
		initialCount: '<'
	},
	template: `
		<div class="counter">
			<h3>Counter: {{ $ctrl.count }}</h3>
			<a class="counter__increment" href="" ng-click="$ctrl.increment()">Increment Counter</a> -
			<a class="counter__decrement" href="" ng-click="$ctrl.decrement()">Decrement Counter</a>
		</div>
	`,
	controller: function() {
		this.count = 0;

		this.$onInit = function() {
			this.count = this.initialCount;
		};

		this.increment = function increment() {
			this.count++;
		};

		this.decrement = function decrement() {
			this.count--;
		};
	}
};

angular
	.module('app')
	.component('counter', counter);
