'use strict';

// Register `veiculoUpdate` component, along with its associated controller and template
angular.
  module('veiculoUpdate', ['ngRoute', 'core.veiculo']).
  component('veiculoUpdate', {
    templateUrl: 'veiculo-update/veiculo-update.template.html',
    controller: ['$scope', '$routeParams', '$window', 'VeiculoService',
      function VeiculoUpdateController($scope, $routeParams, $window, VeiculoService) {

        $scope.veiculo = {};
        VeiculoService.getDetalheVeiculo($routeParams.veiculoId, function (value) {
          $scope.veiculo = value[0];
          $scope.veiculo.vendido = $scope.veiculo.vendido == '1' ? true : false;
          if ($scope.veiculo.imagem) {
            $scope.veiculo.imagem = JSON.parse($scope.veiculo.imagem);
          }
        });

        $scope.updateVeiculo = function () {
          $scope.veiculo.vendido = $scope.veiculo.vendido ? '1' : '0';
          if ($scope.form.$error.maxsize || !$scope.veiculo.imagem) {
            $scope.veiculo.imagem = '';
          }
          VeiculoService.updateVeiculo($scope.veiculo, function (value) {
            $window.location.href = '/#!/veiculos/' + $scope.veiculo.id + '?save=success';
          });
        }

        this.years = function (startYear) {
          var currentYear = (new Date().getFullYear()) + 1, years = [];
          startYear = startYear || 1980;
          while (startYear <= currentYear) {
            years.push(String(currentYear--));
          }
          return years;
        }
        $scope.options = this.years();

      }
    ]
  });
