'use strict';

// Register `veiculoDelete` component, along with its associated controller and template
angular.
  module('veiculoDelete', ['ngRoute','core.veiculo']).
  component('veiculoDelete', {
    templateUrl: 'veiculo-delete/veiculo-delete.template.html',
    controller: ['$scope', '$routeParams', 'VeiculoService',
      function VeiculoDeleteController($scope, $routeParams, VeiculoService) {

        VeiculoService.getDetalheVeiculo($routeParams.veiculoId, function (value) {
          $scope.veiculo = value[0];
        });

        $scope.confirm = function () {
          VeiculoService.deleteVeiculo($routeParams.veiculoId, function (value) {
            $scope.success = true;
          });
        }

      }
    ]
  });
