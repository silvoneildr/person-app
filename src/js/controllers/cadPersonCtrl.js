angular.module('personApp')
    .controller('CadPersonCtrl', function($scope, $http, $location, $routeParams) {

        $scope.formEdit = $routeParams.edit
 
         // se for edição retorna uma pessoa pelo id
        if ($scope.formEdit) {
            $http.get(`http://localhost:3003/api/pessoas/${$routeParams.id}`)
                .then(function(res) {
                    $scope.person = res.data
                }, function(res){
                    $scope.person = "Erro ao carregar a pessoa";
                });
        } else {
            $scope.person = {}
        }

        // retorna a lista de pessoas
        $http.get("http://localhost:3003/api/pessoas").then(function(response) {
            $scope.persons = response;
        }, function(response) {
            $scope.persons = "Erro ao carregar os pessoas";
        });
                       
        // retorna lista de estados brasileiros
        $http.get("http://www.geonames.org/childrenJSON?geonameId=3469034")
            .then(function(response) {
                $scope.arrEstados = response;
            }, function(response) {
                $scope.arrEstados = "Erro ao carregar os Estados";
            });
        
        // insere uma pessoa
        $scope.createPessoa = function(record){

            if (!ValidCPF(record.cpf.replace(/[^\d]+/g,''))){
                window.alert('O CPF: ' + record.cpf + ' não é válido!');
                return;
            }

            var index = $scope.persons.data
                .map(function(e) { return e.cpf; })
                .indexOf(record.cpf);

			if (index > -1 && !$routeParams.id) {
                window.alert('Já existe um registro com CPF: ' + record.cpf);
                return;
            };

            $http.post("http://localhost:3003/api/pessoas", record)
                .then(function(response) {
                    //console.log('Registro inserido com sucesso!');  
                }).catch(function(resp) {
                    console.log(resp);
                })
            $location.path("/persons");
        };

        // altera uma pessoa
        $scope.updatePessoa= function(){

            const url = `http://localhost:3003/api/pessoas/${$routeParams.id}`

            $http.put(url, $scope.person).then(function(res) {
                //console.log('Registro atualizado com sucesso!')          
            }).catch(function(res) {
                console.log(res)
            });
            $location.path("/persons")
        };

        // função para validar CPF
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

    })