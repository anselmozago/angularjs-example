'use strict';

// Register `veiculoNew` component, along with its associated controller and template
angular.
  module('veiculoNew', ['ngRoute', 'core.veiculo']).
  component('veiculoNew', {
    templateUrl: 'veiculo-new/veiculo-new.template.html',
    controller: ['$scope', '$window', 'VeiculoService',
      function VeiculoNewController($scope, $window, VeiculoService) {

        $scope.veiculo = {};

        $scope.saveVeiculo = function () {
          $scope.veiculo.vendido = $scope.veiculo.vendido ? '1' : '0';
          if ($scope.form.$error.maxsize || !$scope.veiculo.imagem) {
            $scope.veiculo.imagem = '';
          }
          VeiculoService.saveVeiculo($scope.veiculo, function (value) {
            $window.location.href = '/#!/veiculos/' + value.id + '?save=success';
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
