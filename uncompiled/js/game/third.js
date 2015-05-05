angular.module("uu")

.controller("ThirdLevel", ["$scope", "$location", "Storage", "Focus", function($scope, $location, Storage, Focus) {
	$scope.player = Storage.getData().player;
	$scope.level = {};
	$scope.level.sort = false;
	$scope.showJumbotron = true;

	$scope.level.exampleUsers = [
		{navn: "Herdis", kjonn: "kvinne"},
		{navn: "Helge", kjonn: "mann"},
		{navn: "Helga", kjonn: "kvinne"},
		{navn: "Hanne", kjonn: "kvinne"},
		{navn: "Henrik", kjonn: "mann"},
		{navn: "Hallstein", kjonn: "mann"},
		{navn: "Hilde", kjonn: "kvinne"},
		{navn: "Henning", kjonn: "mann"}];

	$scope.showKeyboardTrap1 = function() {
		$scope.smallerDescription = true;
		$scope.showJumbotron = false;
		$scope.keyboardTrap1 = true;
	}

	$scope.awesome = function() {
		alert("Dette burde aldri skje");
	}

	$scope.showNextExample = function() {
		$scope.keyboardTrap1 = false;
		$scope.keyboardTrap2 = true;
	}

	$scope.showSummary = function() {
		$scope.keyboardTrap2 = false;
		$scope.summary = true;	
	}

	$scope.shiftFocus = function($event) {
		$event.preventDefault();
		$scope.level.sort = !$scope.level.sort;

		Focus("result");
	}

	$scope.nextLevel = function() {
		$location.path("/fourth");
	}

}])