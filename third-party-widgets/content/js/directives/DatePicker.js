function DatePicker($timeout, PikadayService) {
	return {
		scope: {
			date: '='
		},
		template: `
			<div>
				Isolate date: {{ date | date: 'MMM d, yyyy' }}
				<input type="text">
			</div>
		`,
		link: function ($scope, $element, $attrs) {
			var field = $element[0].querySelector('input');
			var picker = PikadayService({
				field: field,
				onSelect: function (date) {
					$timeout(function () {
						$scope.date = date;
					});
				}
			});
			picker.setDate($scope.date);
		}
	}
}

angular
	.module('app')
	.directive('datePicker', DatePicker);
