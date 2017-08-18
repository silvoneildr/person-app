angular.module('personApp')
    .controller('CadPersonCtrl', ['$scope', 'dao', function($scope, dao) {
        $scope.persons = dao.getPersons();
        $scope.persons.open();
        
        $scope.ufs = [
            {uf: 'AM'}, {uf: 'GO'}, {uf: 'TO'}, {uf: 'SC'}, {uf: 'MG'}, {uf: 'SP'},
            {uf: 'DF'}, {uf: 'RJ'} , {uf: 'RS'}, {uf: 'BA'}, {uf: 'AL'}, {uf: 'CE'}
        ];

        $scope.addPerson = function(record){

            if (!$scope.persons) {
                $scope.persons = [];
		    };

            $scope.persons.save(record);
            $scope.persons.post();
        };

        $scope.delPerson = function(records){

            $scope.persons.delete(person);
            $scope.persons = records.filter(function (person){
            if (!person.selected) return person;
            });
            
            $scope.persons.post();
        };
    }
]);