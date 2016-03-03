'use strict';
angular.module('TaxCalculator')
.controller('CalculateTaxCtrl', function(TaxFactory, $stateParams){
	var self = this;
	var TaxService = TaxFactory.getService($stateParams.assessmentYear);	
	TaxService.GetViewData().then(function(_viewData){
		self.ViewData = _viewData;
	});
	
	this.calculateTax=function(){
		/*IncomeTaxService.calculateTax(this.AY, this.gender, this.age, this.taxableIncome).then(function(tax){
			self.finalTax = tax;
		});*/
		self.finalTax = TaxService.CalculateTax(this.taxableIncome);
    };
});
