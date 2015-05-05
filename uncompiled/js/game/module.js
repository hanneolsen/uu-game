angular.module("uu", [
	'ngRoute'
])

.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'templates/first.html',
			controller: 'FirstLevel'
		}).
			when('/second', {
			templateUrl: 'templates/second.html',
			controller: 'SecondLevel'
		}).
			when('/third', {
			templateUrl: 'templates/third.html',
			controller: 'ThirdLevel'
		}).
			when('/fourth', {
			templateUrl: 'templates/fourth.html',
			controller: 'FourthLevel'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]);