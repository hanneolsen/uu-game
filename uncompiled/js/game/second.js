angular.module("uu")

.controller("SecondLevel", ["$scope", "$location", "Storage", function($scope, $location, Storage) {
	$scope.player = Storage.getData().player;
	$scope.level = {};

	$scope.nextLevel = function() {
		$location.path("/third");
	}

}])