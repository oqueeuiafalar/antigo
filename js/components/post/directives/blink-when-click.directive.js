(function(){
	
	'use strict';
	
	angular.module('natalia-post').directive(blinkWhenClick, blinkWhenClick);

	function blinkWhenClick(){
		var directive = {
			restrict: 'A',
			scope: {},
			controller: blinkWhenClickController,
			link: blinkWhenClickLink,
			controllerAs: 'vc',
			bindToController: true,
		};

		function blinkWhenClickController(){
			console.log('oi');
		}

		function blinkWhenClickLink(){
			console.log('blink');
		}

		return directive;
	}

})();