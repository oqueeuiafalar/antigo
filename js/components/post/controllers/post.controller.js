(function(){
	angular.module('natalia-post').controller('postController', postController);

	function postController(){
		var vc = this;
		vc.showDropOptions = false;
		vc.toggleDropOptions = toggleDropOptions;

		function toggleDropOptions(){
			vc.showDropOptions = !vc.showDropOptions;
		}
	}
})();