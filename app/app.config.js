'use strict';

angular.
  module('veiculosApp').
  config(['$routeProvider', '$httpProvider',
    function config($routeProvider, $httpProvider) {
      $routeProvider.
        when('/veiculos', {
          template: '<veiculo-list></veiculo-list>'
        }).
        when('/veiculos/new', {
          template: '<veiculo-new></veiculo-new>'
        }).
        when('/veiculos/update/:veiculoId', {
          template: '<veiculo-update></veiculo-update>'
        }).
        when('/veiculos/delete/:veiculoId', {
          template: '<veiculo-delete></veiculo-delete>'
        }).
        when('/veiculos/search/:query', {
          template: '<veiculo-search></veiculo-search>'
        }).
        when('/veiculos/:veiculoId', {
          template: '<veiculo-detail></veiculo-detail>'
        }).
        otherwise('/veiculos');
    }
  ])
  .constant('API_ENDPOINT_URI', 'http://localhost:8080');
