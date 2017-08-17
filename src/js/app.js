angular.module('personApp', [
    'ngRoute'
])
.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/persons', {
                templateUrl: 'views/person.html',
                controller: 'PersonCtrl'
            });
    }
]);