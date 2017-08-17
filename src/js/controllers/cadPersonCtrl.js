angular.module('personApp')
    .controller('CadPersonCtrl', ['$scope', 'dao', function($scope, dao) {
        $scope.persons = dao.getPersons();
        
        $scope.ufs = [
            {uf: 'AM'}, {uf: 'GO'}, {uf: 'TO'}, {uf: 'SC'}, {uf: 'MG'}, {uf: 'SP'},
            {uf: 'DF'}, {uf: 'RJ'} , {uf: 'RS'}, {uf: 'BA'}, {uf: 'AL'}, {uf: 'CE'}
        ];

        $scope.addPerson = function(){

            $scope.record = {};

            if (!$scope.persons) {
                $scope.persons = [];
		    };

            $scope.persons.save($scope.record);
            $scope.persons.post();
            //$state.go('persons',{});
        };
    }
]);