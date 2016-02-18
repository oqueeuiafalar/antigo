(function(){
	angular.module('natalia').controller('dropOptionsController', dropOptionsController);

	function dropOptionsController(){
		var vc = this;
		vc.showDropOptions = false;
		vc.toggleDropOptions = toggleDropOptions;

		function toggleDropOptions(){
			vc.showDropOptions = !vc.showDropOptions;
		}
	}
})();