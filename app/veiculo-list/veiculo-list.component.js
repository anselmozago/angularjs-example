'use strict';

angular.
  module('veiculoList', ['core.veiculo']).
  component('veiculoList', {
    templateUrl: 'veiculo-list/veiculo-list.template.html',
    controller: ['$scope', '$http', 'VeiculoService',
      function VeiculoListController($scope, $http, VeiculoService) {
        VeiculoService.getVeiculos(function (value) {
          $scope.veiculos = value;
        });
      }
    ]
  });
