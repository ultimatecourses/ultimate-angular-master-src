function TodoController(TodoService) {
	var ctrl = this;
	ctrl.getTodos = function () {
		TodoService.getTodos().then(function (response) {
			ctrl.todos = response;
		});
	};
}

angular
	.module('app')
	.controller('TodoController', TodoController);
