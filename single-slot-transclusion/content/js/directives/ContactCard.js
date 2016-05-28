function ContactCard() {
	return {
		transclude: true,
		template: `
			<div>
				<h4>Contact</h4>
				<div ng-transclude></div>
			</div>
		`
	}
}

angular
	.module('app')
	.directive('contactCard', ContactCard);
