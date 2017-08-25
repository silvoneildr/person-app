angular.module('personApp')
    .controller('PersonCtrl', function($scope, $location, $http, $routeParams, dao) {

        var getPessoas = function(){
            $http.get("http://localhost:3003/api/pessoas")
                .then(function(response) {
                    $scope.persons = response.data;
                }, function(response) {
                    $scope.persons = "Erro ao carregar os pessoas";
                });
        }
        getPessoas();

        $scope.addPessoa = function(){
            $scope.inserting = false;
            $location.path("/cadPersons");
        }
        
        $scope.editPerson = function(record){
            $scope.inserting = false;
            $location.path("/cadPersons").search({id: record._id});
        };

        $scope.delPerson = function (record) {

            const url = `http://localhost:3003/api/pessoas/${record._id}`
            
            $http.delete(url, record).then(function(response) {
                console.log('Apagou o registro')
                getPessoas(); 
            }).catch(function(resp) {
                console.log('Erro ao apagar o registro')
            });     
        };
    });