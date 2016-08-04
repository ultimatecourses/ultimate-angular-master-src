angular
	.module('app', [])
	.constant('TODO_API', 'http://jsonplaceholder.typicode.com/todos')
	.config(function ($httpProvider) {
		$httpProvider.interceptors.push('MyHttpInterceptor');
	});
