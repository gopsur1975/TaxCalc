'use strict';
angular.module('TaxCalculator')
.directive('assessmentYear', function(){
	return {
		controllerAs: 'AY',
		templateUrl : 'scripts/modules/assessment-year/assessment-year.html',
		controller: 'AssessmentYearCtrl'
	};
});