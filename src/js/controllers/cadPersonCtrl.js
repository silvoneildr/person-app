angular.module('personApp')
    .controller('CadPersonCtrl', ['$scope', 'dao', function($scope, dao) {

        $scope.ufs = [
            {uf: 'AM'}, {uf: 'GO'}, {uf: 'TO'}, {uf: 'SC'}, {uf: 'MG'}, {uf: 'SP'},
            {uf: 'DF'}, {uf: 'RJ'} , {uf: 'RS'}, {uf: 'BA'}, {uf: 'AL'}, {uf: 'CE'}
        ];
    }
]);