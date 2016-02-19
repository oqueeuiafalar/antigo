var NATALIA = {};

if(!window.NATALIA){
	NATALIA = {};
}


(function(){
	
	if(!NATALIA.angularDependencies){
		NATALIA.angularDependencies = [];
	}
	
	angular.module('natalia', NATALIA.angularDependencies);
	
})()