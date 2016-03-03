 'use strict';
 angular.module('TaxCalculator')
 .factory('IncomeTaxService', function($http){
	 function getTaxConfigByYear(yearRange){
		 return $http.get('/data/'+yearRange+'.json').then(function(result){
			 return result.data;
		 });
	 }
	 
	 function getTaxConfigByGender(taxYear, gender){
		 return getTaxConfigByYear(taxYear).then(function(config){
			 return config[gender] || config['default'];
		 });
	 }
	 
	 function getTaxConfigByAge(taxYear, gender, age){
		 return getTaxConfigByGender(taxYear, gender).then(function(config){
			var ageRange = Object.keys(config).sort();
			var currentRange = 'default';
			for(var i=0, len=ageRange.length; i<len;i++){
				if(age<+ageRange[i]){
					currentRange = ageRange[i];
					break;
				}
			}
			return config[currentRange];
		 });
	 }
	 
	 function calculateTax(taxYear, gender, age, income){
		 return getTaxConfigByAge(taxYear, gender, age).then(function(config){
			var incomeRange = Object.keys(config) ;
			var tax = 0;
			var currentRange = config['default'], range = 0, prevRange = 0;
			for(var i=0, len=incomeRange.length; i<len;i++){
				if(income<=+incomeRange[i] || incomeRange[i]==='default'){
					currentRange = config[incomeRange[i]];
					range = +incomeRange[i];
					prevRange = +incomeRange[i-1] || 0;
					break;
				}
			}			
			var percent = currentRange.percent;
			tax = ((income - prevRange) * percent/100) + currentRange.fixed;
			
			return tax;
		 });
	 }
	 return {
		 calculateTax: calculateTax
	 };	 
 });
 