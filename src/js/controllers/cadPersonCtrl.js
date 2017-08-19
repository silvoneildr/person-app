angular.module('personApp')
    .controller('CadPersonCtrl', function($scope, $http, $location, dao) {
        var loadPersons = function(){
            $scope.persons = dao.getPersons();
            $scope.persons.open();
        }

        loadPersons();
 
        $http.get("http://www.geonames.org/childrenJSON?geonameId=3469034")
            .then(function(response) {
                $scope.records = response;
            }, function(response) {
                $scope.records = "Erro ao carregar os Estados";
            });

        $scope.addPerson = function(record){

            if (!$scope.persons) {
                $scope.persons = [];
		    };

            console.log(record.cpf);    

			if ($scope.persons.data.indexOf(record.cpf > 0)) {
                window.alert('Já exite um registro com CPF: ' + record.cpf);
            } else {
                
                $scope.persons.save(record);
                $scope.persons.post();
                $scope.cadForm.$setPristine();
                $location.path("/persons"); 
            };
        };

        $scope.delPerson = function(records){

            $scope.persons.delete(person);
            $scope.persons = records.filter(function (person){
            if (!person.selected) return person;
            });
            
            $scope.persons.post();
        };
    });
