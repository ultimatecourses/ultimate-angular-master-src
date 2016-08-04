function TodoService(TODO_API, $http) {
	return {
		getTodos: function () {
			return $http.get(TODO_API).then(function (response) {
				return response.data;
			});
		}
	};
}

angular
	.module('app')
	.factory('TodoService', TodoService);
