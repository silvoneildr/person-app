angular.module('personApp', ['ngRoute'])
    .config(['$routeProvider',
        
        function($routeProvider, $routeParams) {
            
            $routeProvider.when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/persons', {
                templateUrl: 'views/person.html',
                controller: 'PersonCtrl'
            })
            .when('/cadPersons', {
                templateUrl: 'views/cadPerson.html',
                controller: 'CadPersonCtrl'
            })
            .when('/cadPersons/:id/:edit', {
                templateUrl: 'views/cadPerson.html',
                controller: 'CadPersonCtrl'
            })
            .otherwise({redirectTo: '/'});
        }
]);