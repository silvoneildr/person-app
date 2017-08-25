angular.module('personApp')
    .controller('PersonCtrl', function($scope, $location, $http, $routeParams, dao) {

        var getPessoas = function(){
            $http.get("http://localhost:3003/api/pessoas")
                .then(function(res) {
                    $scope.pessoas = res.data;
                }, function(res) {
                    $scope.pessoas = "Erro ao carregar os pessoas";
                });
        }
        getPessoas();

        $scope.addPessoa = function(){
            $scope.inserting = true;
            $location.path("/cadPersons");
        }
        
        $scope.editPessoa = function(record){
            $scope.inserting = false;
            $location.path("/cadPersons").search({id: record._id});
        };

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