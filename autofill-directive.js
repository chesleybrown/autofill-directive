'use strict';

module.exports = function(ngModule) {
	ngModule.directive('autofill', function() {
		return {
			require: 'ngModel',
			link: function (scope, element, attrs, ngModel) {
				scope.$on('autofill-submit', function(e) {
					ngModel.$setViewValue(element.val());
				});
			}
		}
	});
	
	ngModule.directive('autofillSubmit', ['$parse', function($parse) {
		return {
			link: function (scope, element) {
				var fn = $parse(element.attr('autofill-submit'));
				element.on('submit', function(event) {
					scope.$broadcast('autofill-submit');
					scope.$apply(function() {
						fn(scope, {$event:event});
					});
				});
			}
		}
	}]);
};