function Counter() {
	return {
		scope: {},
		bindToController: {
			count: '='
		},
		template: `
			<div class="counter">
				<h3>Counter: {{ counter.count }}</h3>
				<a class="counter__increment" href="" ng-click="counter.increment()">Increment Counter</a> -
				<a class="counter__decrement" href="" ng-click="counter.decrement()">Decrement Counter</a>
			</div>
		`,
		controller: 'CounterController as counter'
	}
}

angular
	.module('app')
	.directive('counter', Counter);
