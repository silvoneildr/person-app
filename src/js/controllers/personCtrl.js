angular.module('personApp')
    .controller('PersonCtrl', function($scope, $location,$routeParams, dao) {

        var loadPersons = function(){
            $scope.persons = dao.getPersons();
            $scope.persons.open();
        }

        loadPersons();

        $scope.isSelected = function (persons) {
            return persons.some(function (person) {
                return person.selected;
            });
        };
        
        $scope.delPersons = function (records) {

            for(var i = records.length - 1; i >= 0; i--) {
                
				if(records[i].selected) {
                    $scope.persons.delete(records[i]);
				}
			}
        	$scope.persons.post();
        };

        $scope.editPerson = function(record){
            $scope.person =  OjsUtils.cloneObject(record);
            $scope.inserting = false;
            $location.path("/cadPersons").search({id: $scope.person.id});
        };
    });