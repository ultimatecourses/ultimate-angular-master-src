var contact = {
	template: `
		<div class="contact">
		  <div class="contact-methods">
        <h3>How would you like to contact me?</h3>
        <div ui-view="methods"></div>
      </div>
			<div class="contact-details" ui-view="details"></div>
		</div>
	`,
	controller: function ($transitions) {
		this.uiCanExit = function () {
			console.log('Exiting...');
			return window.confirm('Are you sure?');
		};
		$transitions.onStart({}, function () {

		});
		$transitions.onSuccess({
			to: 'contact.*'
		}, function () {
			console.log('Contact all');
		});
	}
};

angular
	.module('contact')
	.component('contact', contact)
  .config(function ($stateProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        views: {
					'@': {
						component: 'contact'
					},
					'methods@contact': {
						component: 'contactMethods'
					}
				},
				data: {
					requiredAuth: true
				},
				onEnter: function () {
					console.log('Enter');
				},
				onRetain: function () {
					console.log('Retain');
				},
				onExit: function () {
					console.log('Exit');
				}
      });
  });
