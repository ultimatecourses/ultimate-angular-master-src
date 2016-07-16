var contactPhone = {
	template: `
		<div>Contact me via phone: 07123456789</div>
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
