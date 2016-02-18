var NATALIA = {};

angular.module('natalia', []);

angular.module('natalia').factory('dropOptions', dropOptionsModel);

function dropOptionsModel(){
	var model = {
		isOptionsOpen: false,
		toggleDropOptions: toggleDropOptions
	}

	function toggleDropOptions(){
		model.isOptionsOpen = !isOptionsOpen;
	}

	return model;
}

angular.module('natalia').controller('dropOptionsController', dropOptionsController);

function dropOptionsController(){
	var vc = this;
	vc.showDropOptions = false;
	vc.toggleDropOptions = toggleDropOptions;

	function toggleDropOptions(){
		vc.showDropOptions = !vc.showDropOptions;
	}

}

