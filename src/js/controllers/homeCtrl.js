angular.module('personApp')
    .controller('HomeCtrl', ['$scope', function($scope) {
        console.log('Loaded.');
        $scope.message = 'Welcome Home';
    }

]);