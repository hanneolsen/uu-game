angular.module("uu", [
	'ngRoute'
])

.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'src/templates/first.html',
			controller: 'FirstLevel'
		}).
			when('/second', {
			templateUrl: 'src/templates/second.html',
			controller: 'SecondLevel'
		}).
			when('/third', {
			templateUrl: 'src/templates/third.html',
			controller: 'ThirdLevel'
		}).
			when('/fourth', {
			templateUrl: 'src/templates/fourth.html',
			controller: 'FourthLevel'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]);

/* --- Ny fil --- */ 

angular.module("uu")

.directive('focusMe', function($timeout, $parse) {
  return {
    //scope: true,   // optionally create a child scope
    link: function(scope, element, attrs) {
      var model = $parse(attrs.focusMe);
      scope.$watch(model, function(value) {
        if(value === true) { 
          $timeout(function() {
            element[0].focus(); 
          });
        }
      });
    }
  };
});

/* --- Ny fil --- */ 

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

/* --- Ny fil --- */ 

angular.module("uu")

.controller("SecondLevel", ["$scope", "$location", "Storage", function($scope, $location, Storage) {
	$scope.player = Storage.getData().player;
	$scope.level = {};

	$scope.nextLevel = function() {
		$location.path("/third");
	}

}])

/* --- Ny fil --- */ 

angular.module("uu")

.factory("Storage", function() {
	var data = {};

	return {
		storePlayer: function(player) {
			data.player = player;
		},
		getData: function() {
			return data;
		}
	}
})

.factory("Focus", function($timeout, $window) {
	return function(id) {
		// timeout makes sure that it is invoked after any other event has been triggered.
		// e.g. click events that need to run before the focus or
		// inputs elements that are in a disabled state but are enabled when those events
		// are triggered.
		$timeout(function() {
			var element = $window.document.getElementById(id);
			if(element) {
				element.focus();
			}
		});
	}
});

/* --- Ny fil --- */ 

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