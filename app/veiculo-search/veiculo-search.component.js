'use strict';

angular.
  module('veiculoSearch', ['core.veiculo']).
  component('veiculoSearch', {
    templateUrl: 'veiculo-search/veiculo-search.template.html',
    controller: ['$scope', '$routeParams', '$http', 'VeiculoService',
      function VeiculoSearchController($scope, $routeParams, $http, VeiculoService) {
        $scope.query = $routeParams.query;
        VeiculoService.findVeiculos($routeParams.query, function (value) {
          $scope.veiculos = value;
        });
      }
    ]
  });
