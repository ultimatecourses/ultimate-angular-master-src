var contactEmail = {
	template: `
		<div>Contact us via Email: todd@toddmotto.com</div>
	`
};

angular
	.module('contact')
	.component('contactEmail', contactEmail)
  .config(function ($stateProvider) {
    $stateProvider
      .state('contact.email', {
        url: '/email', // this inherits from the parent state, so /contact/email
        component: 'contactEmail'
      });
  });
