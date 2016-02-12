'use strict';
angular.module('TaxCalculator')
.config(function($stateProvider){
	$stateProvider.
	state('app',{
		url: '/',
		abstract:true,
		template: '<ion-nav-view></ion-nav-view>'
	})
	.state('app.home',{
		parent:'app',
		url: 'home',
		templateUrl: 'scripts/modules/home/home.html'
	})
	.state('app.calculate-tax',{
		url:'calculate-tax',
		parent: 'app',
		template: '<calculate-tax></calculate-tax>'
	})
});