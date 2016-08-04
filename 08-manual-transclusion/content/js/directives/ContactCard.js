function ContactCard() {
	return {
		transclude: true,
		template: `
			<div>
				<span></span>
				<div></div>
			</div>
		`,
		link: function ($scope, $element, $attrs, $ctrl, $transclude) {
			var div = $element.find('div');
			var span = $element.find('span');
			var cloned = $transclude(function (elements) {
				elements[0].textContent = elements[0].textContent.toUpperCase();
			});
			console.log(cloned);
			span.append(cloned[0]);
			div.append(cloned[1]);
		}
	}
}

angular
	.module('app')
	.directive('contactCard', ContactCard);
