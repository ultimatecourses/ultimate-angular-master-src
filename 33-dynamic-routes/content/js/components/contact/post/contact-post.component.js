var contactPost = {
	template: `
		<div>
			Contact by post:
			<div>
				<p>123 Awesome Street</p>
				<p>Awesomeville</p>
				<p>Awesome City</p>
			</div>
		</div>
	`
};

angular
	.module('contact')
	.component('contactPost', contactPost)
	.config(function ($stateProvider) {
		$stateProvider
			.state('contact.post', {
				url: '/post',
				views: {
					'details@contact': {
						component: 'contactPost'
					}
				}
			});
	});
