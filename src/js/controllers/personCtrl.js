angular.module('personApp')
    .controller('PersonCtrl', function($scope, $location, $http, $routeParams) {

        // retorna a lista de pessoas
        var getPessoas = function(){
            $http.get("http://localhost:3003/api/pessoas")
            .then(function(res) {
                $scope.pessoas = res.data;
            }, function(res) {
                $scope.pessoas = "Erro ao carregar os pessoas";
            });
        }
        getPessoas()

        // carrega o formulário para inserir uma pessoa
        $scope.addPessoa = function(){
            $location.path("/cadPersons").search({
                edit: false
            });
        }
        
        // carrega o formulário para alterar uma pessoa
        $scope.editPessoa = function(record){
            $location.path("/cadPersons").search({
                id: record._id,
                edit: true
            });
        };

        // exclui uma pessoa
        $scope.delPessoa = function(record) {

            const url = `http://localhost:3003/api/pessoas/${record._id}`
            
            $http.delete(url, record).then(function(res) {
                console.log('Apagou o registro')
                getPessoas();
            }).catch(function(resp) {
                console.log('Erro ao apagar o registro')
            });    
        };

    });