'use strict';
angular.module('TaxCalculator')
.directive('calculateTax', function(){
	return {
		controllerAs: 'tax',
		// template:  '<div><select ng-model="tax.AY" ng-options="year for year in tax.years"></select></div><pre>{{tax | json}}</pre>',
		templateUrl : 'scripts/modules/calculate-tax/calculate-tax.html',
		controller: 'CalculateTaxCtrl'
	};
});