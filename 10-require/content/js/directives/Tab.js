function tab() {
	return {
		scope: {},
		transclude: true,
		template: `
			<div ng-if="tab.selected">
				<div ng-transclude></div>
			</div>
		`,
		require: '^^tabs',
		link: function ($scope, $element, $attrs, $ctrl) {
			$scope.tab = {
				label: $attrs.label,
				selected: false
			};
			$ctrl.addTab($scope.tab);
		}
	}
}

angular
	.module('app')
	.directive('tab', tab);
