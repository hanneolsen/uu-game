angular.module("uu")

.controller("FirstLevel", ["$scope", "$location", "Storage", function($scope, $location, Storage) {
	$scope.player = {};

	$scope.personalia = function() {
		$scope.showPersonalia = true;
	}


	$scope.nextLevel = function() {
		Storage.storePlayer($scope.player);
		$location.path("/second");
	}

}])