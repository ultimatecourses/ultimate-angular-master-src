function DemoController(DemoService) {

	this.requestTodos = function () {
		DemoService.getTodos().then(function (response) {
			console.log('Todos:', response);
		});
	};

	this.requestComments = function () {
		DemoService.getComments().then(function (response) {
			console.log('Comments:', response);
		});
	};

	this.requestAll = function () {
		DemoService.getAll().then(function (response) {
			console.log('All:', response);
		});
	};

	this.requestRace = function () {
		DemoService.getFirstResolved().then(function (response) {
			console.log('Race:', response);
		});
	};

}

angular
	.module('app')
	.controller('DemoController', DemoController);
