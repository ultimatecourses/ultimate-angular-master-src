angular
	.module('app', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('user', {
				url: '/user/:name',
				templateUrl: 'views/user.html',
				controller: 'UserController as user'
			});

		$urlRouterProvider.otherwise('/');
	});