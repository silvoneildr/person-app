angular.module('personApp')
    .controller('PersonCtrl', ['$scope', 'dao', function($scope, dao) {

        var loadPersons = function(){
            $scope.persons = dao.getPersons();
            $scope.persons.open();
        }

        loadPersons();

        $scope.delPersons = function (persons) {
            $scope.persons = persons.filter(function (person) {
                if (!person.selected) 
                    return person;
            });
        };
        $scope.isSelected = function (persons) {
            return persons.some(function (person) {
                return person.selected;
            });
        };
    }
]);