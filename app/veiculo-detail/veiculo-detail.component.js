'use strict';

// Register `veiculoDetail` component, along with its associated controller and template
angular.
  module('veiculoDetail', ['ngRoute','core.veiculo']).
  component('veiculoDetail', {
    templateUrl: 'veiculo-detail/veiculo-detail.template.html',
    controller: ['$scope', '$routeParams', 'VeiculoService',
      function VeiculoDetailController($scope, $routeParams, VeiculoService) {
        $scope.messageSuccess = $routeParams.save == "success";
        VeiculoService.getDetalheVeiculo($routeParams.veiculoId, function (value) {
          $scope.veiculo = value[0];
          $scope.veiculo.vendido = ($scope.veiculo.vendido == "1") ? true : false;
          if ($scope.veiculo.imagem) {
            $scope.veiculo.imagem = JSON.parse($scope.veiculo.imagem);
          }
        });
      }
    ]
  });
