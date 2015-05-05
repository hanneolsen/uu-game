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