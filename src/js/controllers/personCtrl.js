angular.module('personApp')
    .controller('PersonCtrl', function($scope, dao) {

        var loadPersons = function(){
            $scope.persons = dao.getPersons();
            $scope.persons.open();
        }

/*        var loadEditPerson = function(){
            $scope.person = dao.getPersons().getById(parseInt($stateParams.id));
        }*/

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
            //
        };
    });