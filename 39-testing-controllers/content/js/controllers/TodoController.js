function TodoController(TodoService) {
	var ctrl = this;

	this.title = '';

	ctrl.list = [];

	ctrl.getTodos = function () {
		TodoService
			.query()
			.$promise
			.then(function (res) {
				ctrl.list = res;
			});
	};

	ctrl.newTodo = function () {
		var newTodo = new TodoService();

		newTodo.completed = false;
		newTodo.title = this.title;
		newTodo.userId = 1;

		newTodo.$save();

		ctrl.list.unshift(newTodo);
	};

	ctrl.deleteTodo = function (id) {
		TodoService.delete({id: id});

		ctrl.list = ctrl.list.filter(function (item) {
			return item.id !== id;
		});
	};
}

angular
	.module('app')
	.controller('TodoController', TodoController);
