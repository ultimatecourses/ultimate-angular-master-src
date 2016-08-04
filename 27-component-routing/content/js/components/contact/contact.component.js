var contact = {
	template: `
		<div class="contact">Contact</div>
	`
};

angular
	.module('contact')
	.component('contact', contact)
	.config(function ($stateProvider) {
		$stateProvider
		  .state('contact', {
				url: '/contact',
				component: 'contact'
			});
	});
