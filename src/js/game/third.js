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

	$scope.showModal = function() {
		console.log("hi?");
		$scope.modal = true;
	}

	$scope.fetchKey = function() {
		$scope.level.key = true;
	}

	$scope.showSummary = function() {
		$scope.keyboardTrap1 = false;
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