angular.module('personApp')
    .controller('PersonCtrl', function($scope, $location, $http, $routeParams) {

        // retorna a lista de pessoas
        $http.get("http://localhost:3003/api/pessoas")
            .then(function(res) {
                $scope.pessoas = res.data;
            }, function(res) {
                $scope.pessoas = "Erro ao carregar os pessoas";
            });

        // carrega o formulário para inserir uma pessoa
        $scope.addPessoa = function(){
            $scope.insert = true;
            $location.path("/cadPersons");
        }
        
        // carrega o formulário para alterar uma pessoa
        $scope.editPessoa = function(record){
            $scope.insert = false;
            $location.path("/cadPersons").search({
                id: record._id
            });
        };

        // exclui uma pessoa
        $scope.delPessoa = function(record) {

            const url = `http://localhost:3003/api/pessoas/${record._id}`
            
            $http.delete(url, record).then(function(res) {
                console.log('Apagou o registro')
            }).catch(function(resp) {
                console.log('Erro ao apagar o registro')
            });     
        };

    });