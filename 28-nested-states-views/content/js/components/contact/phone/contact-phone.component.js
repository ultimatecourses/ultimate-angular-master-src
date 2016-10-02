var contactPhone = {
	template: `
		<div>Contact via phone: +44(0) 7777 888 999</div>
	`
};

angular
	.module('contact')
	.component('contactPhone', contactPhone)
	.config(function ($stateProvider) {
		$stateProvider
			.state('contact.phone', {
				url: '^/phone',
				component: 'contactPhone'
			});
	});
