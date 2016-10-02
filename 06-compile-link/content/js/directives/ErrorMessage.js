function ErrorMessage() {
	return {
		restrict: 'A',
		compile: function ($element, $attrs) {
			// raw template
			$element.addClass('error');
			console.log(1);
			// return {
			// 	pre: function ($scope, $element, $attrs) {
			// 		// access to child elements that are NOT linked
			// 	},
			// 	post: function ($scope, $element, $attrs) {
			// 		// access to child elements that are linked
			// 		$element.addClass('error--' + $attrs.type);
			// 	}
			// };
			return function postLink($scope, $element, $attrs) {
				$element.addClass('error--' + $attrs.type);
				console.log(2);
			};
		}
	}
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
