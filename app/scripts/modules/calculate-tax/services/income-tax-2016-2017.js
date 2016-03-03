 'use strict';
 angular.module('TaxCalculator')
 .factory('UIService', function($http){
	 function getViewDataByYear(year){
		 return $http.get('data/'+year+'.json').then(function(result){
			 return result.data;
		 });
	 }
	 
	 return {
		 getViewDataByYear: getViewDataByYear
	 };
 })
 .service('IncomeTaxService20162017', function(UIService){
	 this._year = '2016-2017';
	 
	 this.CalculateTax = function(income)
	 {
		 return income*10;
	 };
	 
	 this.GetViewData = function(){
		 return UIService.getViewDataByYear(this._year);
	 };
 })
 .factory('TaxFactory', function($injector){
	 return {
		 getService: function(year){
			 var serviceName = 'IncomeTaxService'+year.replace('-','');
			 return $injector.get(serviceName);
		 }
	 };
 });
 