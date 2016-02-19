'use strict';
angular.module('TaxCalculator')
.controller('CalculateTaxCtrl', function(IncomeTaxService){
	var self = this;
	this.years = [];
	var currentDate = new Date();
	var currentYear = currentDate.getFullYear();
	this.taxableIncome = 0;
    this.totalTax = 0;
	for(var i=0;i<3;i++){
		this.years.push((currentYear-i)+'-'+(currentYear-(i-1)));
	}
	
	this.AY = this.years[0];
	
	this.calculateTax=function(){
		IncomeTaxService.calculateTax(this.AY, this.gender, this.age, this.taxableIncome).then(function(tax){
			self.finalTax = tax;
		});
    };
});
