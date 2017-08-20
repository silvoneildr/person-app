angular.module('personApp')
    .controller('CadPersonCtrl', function($scope, $http, $location, $routeParams, dao) {
        
        $scope.persons = dao.getPersons();
        $scope.persons.open();

        var paramId = parseInt($routeParams.id);

        $http.get("http://www.geonames.org/childrenJSON?geonameId=3469034")
            .then(function(response) {
                $scope.arrEstados = response;
    
                if (paramId) {
                    $scope.person = OjsUtils.cloneObject( $scope.persons.getById(paramId));
                };
            }, function(response) {
                $scope.arrEstados = "Erro ao carregar os Estados";
            });

        var ValidCPF = function(param) {
            var sum;
            var remnant;
            
            sum = 0;
            
            if (param == "00000000000") return false;
            
            for (i=1; i<=9; i++) sum = sum + parseInt(param.substring(i-1, i)) * (11 - i);
            remnant = (sum * 10) % 11;
            
            if ((remnant == 10) || (remnant == 11))  remnant = 0;
            if (remnant != parseInt(param.substring(9, 10)) ) return false;
            
            sum = 0;
            for (i = 1; i <= 10; i++) sum = sum + parseInt(param.substring(i-1, i)) * (12 - i);
            remnant = (sum * 10) % 11;
            
            if ((remnant == 10) || (remnant == 11))  remnant = 0;
            if (remnant != parseInt(param.substring(10, 11) ) ) return false;
            return true;
        } 
 
        $scope.addPerson = function(record){

            if (!$scope.persons) {
                $scope.persons = [];
		    };

            if (!ValidCPF(record.cpf.replace(/[^\d]+/g,''))){
                window.alert('O CPF: ' + record.cpf + ' não é válido!');
                return;
            }

            var index = $scope.persons.data
                .map(function(e) { 
                    return e.cpf; 
                }).indexOf(record.cpf);

			if (index > -1 && !paramId) {
                window.alert('Já existe um registro com CPF: ' + record.cpf);
                return;
            };

            $scope.persons.save(record);
            $scope.persons.post();
            $scope.cadForm.$setPristine();
            $location.path("/persons");
        };
    });
