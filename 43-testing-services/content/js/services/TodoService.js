function TodoService($resource, $http) {
	return $resource('http://jsonplaceholder.typicode.com/todos/:id', {}, {
    delete: {
      method: 'DELETE'
    }
  });
}

angular
	.module('app')
	.service('TodoService', TodoService);
