var home = {
	template: `
		<div class="home">Home Page</div>
	`
};

angular
	.module('home')
	.component('home', home)
  .config(function ($stateProvider, $urlRouterProvider, $transitionsProvider) {
		$transitionsProvider.onStart({
			to: function (state) {
				if (state.data && state.data.requiredAuth) {
					return state.data.requiredAuth;
				}
			}
		}, function ($transitions) {
			console.log('Start...', $transitions);
		});
    $stateProvider
      .state('home', {
        url: '/',
        component: 'home'
      });
    $urlRouterProvider.otherwise('/');
  });
