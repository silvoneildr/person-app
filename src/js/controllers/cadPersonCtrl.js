angular.module('personApp')
    .controller('CadPersonCtrl', function($scope, $http, $location, $routeParams, dao) {
                
        $scope.paramId = $routeParams.id       

        if (paramId){
            $http.get(`http://localhost:3003/api/pessoas/${$scope.paramId}`)
            .then(function(response) {
                $scope.person = response.data
                console.log($scope.person)
            }, function(response){
                $scope.person = "Erro ao carregar a pessoa";
            });
        }

        var listPessoas = function(){
            $http.get("http://localhost:3003/api/pessoas").then(function(response) {
                $scope.persons = response;
            }, function(response) {
                $scope.persons = "Erro ao carregar os pessoas";
            });
        }
        listPessoas();

        var pessoa = function(p){

        }
                       
        $http.get("http://www.geonames.org/childrenJSON?geonameId=3469034")
            .then(function(response) {
                $scope.arrEstados = response;
            }, function(response) {
                $scope.arrEstados = "Erro ao carregar os Estados";
            });


        $scope.createPerson = function(record){

            if (!$scope.persons) {
                $scope.persons = [];
		    };

            if (!ValidCPF(record.cpf.replace(/[^\d]+/g,''))){
                window.alert('O CPF: ' + record.cpf + ' não é válido!');
                return;
            }

            var index = $scope.persons.data
                .map(function(e) { return e.cpf; })
                .indexOf(record.cpf);

			if (index > -1 && !$scope.paramId) {
                window.alert('Já existe um registro com CPF: ' + record.cpf);
                return;
            };

            $http.post("http://localhost:3003/api/pessoas", record)
                .then(function(response) {
                    console.log('Operação realizada com sucesso');
                    listPessoas();
                    $scope.cadForm.$setPristine()
                    $location.path("/persons");
                }).catch(function(resp) {
                    console.log('Erro o salvar os dados');
                })
        };

        $scope.updatePerson = function(record){
            const url = `http://localhost:3003/api/pessoas/${record._id}`
            
            $http.put(url, record).then(function(response) {
                console.log('Apagou o registro')
            }).catch(function(resp) {
                console.log('Erro ao apagar o registro')
            });
            loadPessoas();
        };

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

    });
