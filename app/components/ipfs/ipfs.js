'use strict';

angular.module('myApp.ipfs', [])

.factory('ipfs', ['$window', function($window){
	console.log("$PERSONA: "+$window.Persona)
	return $window.Persona;
}])