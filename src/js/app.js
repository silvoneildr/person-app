angular.module('personApp', [
    'ngRoute',
    'db.dao'
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
            }).when('/cadPersons', {
                templateUrl: 'views/cadPerson.html',
                controller: 'cadPersonCtrl'
            });
    }
]);