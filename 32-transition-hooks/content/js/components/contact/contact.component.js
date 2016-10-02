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
			return window.confirm('Are you sure you want to leave?');
		};
		var myTransition = $transitions.onStart({
			to: 'contact.*'
		}, function ($transition$) {
			// $transition$
		});
		this.$onDestroy = function () {
			myTransition();
		};
	}
};

angular
	.module('contact')
	.component('contact', contact)
	.config(function ($stateProvider) {
		$stateProvider
			.state('contact', {
				url: '/contact',
				data: {
					requiredAuth: true
				},
				onEnter: function () {
					console.log('onEnter');
				},
				onExit: function () {
					console.log('onExit');
				},
				onRetain: function () {
					console.log('onRetain');
				},
				views: {
					'@': {
						component: 'contact'
					},
					'methods@contact': {
						component: 'contactMethods'
					}
				}
			});
	});
