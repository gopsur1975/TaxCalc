'use strict';
angular.module('TaxCalculator')
.controller('AssessmentYearCtrl', function(){
	this.years = [];
	var currentDate = new Date();
	var currentYear = currentDate.getFullYear();
	for(var i=0;i<3;i++){
		this.years.push((currentYear-i)+'-'+(currentYear-(i-1)));
	}	
});
