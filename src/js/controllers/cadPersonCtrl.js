angular.module('personApp')
    .controller('CadPersonCtrl', function($scope, $http, dao) {
        $scope.persons = dao.getPersons();
        $scope.persons.open();
 
        $http.get("http://www.geonames.org/childrenJSON?geonameId=3469034")
            .then(function(response) {
                $scope.records = response;
                //console.log(response.data.geonames[5].adminName1);
            }, function(response) {
                $scope.records = "Something went wrong";
                //console.log(response.data.geonames[0].adminName1);
            });

       console.log($scope.records);


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
    });
