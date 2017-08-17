angular.module('personApp')
    .controller('PersonCtrl', ['$scope', function($scope) {
        console.log('Loaded.');
        $scope.message = 'Hello Persons';

        $scope.persons = [
            {id: 1, name: 'Joaquim Barba', cpf: '80247843270', nasc: '01/10/1960', peso: 60.5, uf: 'SP'},
            {id: 1, name: 'Zelão Chulezento', cpf: '26282651174', nasc: '02/08/1990', peso: 70.3, uf: 'MG'},
            {id: 1, name: 'Mariquinha Serafina', cpf: '82863366580', nasc: '25/05/1986', peso: 59.8, uf: 'SC'},
            {id: 1, name: 'Carmelita Chaves', cpf: '75438432007', nasc: '30/06/1981', peso: 90.0, uf: 'AM'},
            {id: 1, name: 'Chespirito Rodrigues', cpf: '16888255840', nasc: '19/08/2000', peso: 85.6, uf: 'GO'},
            {id: 1, name: 'Antônio Queixada', cpf: '21863343210', nasc: '05/01/1977', peso: 93.2, uf: 'MA'},
        ];
    }
]);