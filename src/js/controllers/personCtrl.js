angular.module('personApp')
    .controller('PersonCtrl', function($scope, $location, $http, $routeParams) {

        // retorna a lista de pessoas
        var getPessoas = function(){
            $http.get("https://app3etapagt4w.herokuapp.com/api/pessoas")
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
            getPessoas();
        }
        
        // carrega o formulário para alterar uma pessoa
        $scope.editPessoa = function(record){
            $location.path("/cadPersons").search({
                id: record._id,
                edit: true
            });
            getPessoas();
        };

        // exclui uma pessoa
        $scope.delPessoa = function(record) {

            const url = `https://app3etapagt4w.herokuapp.com/api/pessoas/${record._id}`
            
            $http.delete(url, record).then(function(res) {
                //console.log('Apagou o registro')
                getPessoas();
            }).catch(function(resp) {
                console.log(resp)
            });    
        };

    });