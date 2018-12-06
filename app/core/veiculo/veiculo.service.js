'use strict';

angular.
  module('core.veiculo', ['ngResource']).
  factory('VeiculoService', ['$resource', 'API_ENDPOINT_URI',
    function ($resource, API_ENDPOINT_URI) {

      var genericOnError = function (error) {
        console.log(error);
      }

      var transformRequest = function (data) {
        var formData = new FormData();
        var key = [];
        for (key in data) {
          if (typeof data[key] === 'object') {
            data[key] = JSON.stringify(data[key]);
          }
          formData.append(key, data[key]);
        };
        return formData;
      }

      return {

        getVeiculos:
          function (onSuccess, onError = genericOnError) {
            $resource(API_ENDPOINT_URI + '/veiculos', {}, {
              query: {
                method: 'GET',
                isArray: true
              }
            }).query().$promise.then(onSuccess, onError)
          },

        findVeiculos:
          function (query, onSuccess, onError = genericOnError) {
            $resource(API_ENDPOINT_URI + '/veiculos/find', { q: query }, {
              query: {
                method: 'GET',
                isArray: true
              }
            }).query().$promise.then(onSuccess, onError)
          },

        getDetalheVeiculo:
          function (veiculoId, onSuccess, onError = genericOnError) {
            $resource(API_ENDPOINT_URI + '/veiculos/:id', { id: veiculoId }, {
              query: {
                method: 'GET',
                isArray: true
              }
            }).query().$promise.then(onSuccess, onError)
          },

        saveVeiculo:
          function (veiculo, onSuccess, onError = genericOnError) {
            $resource(API_ENDPOINT_URI + '/veiculos', {}, {
              save: {
                method: 'POST',
                isArray: false,
                headers: { 'Content-Type': undefined },
                transformRequest: transformRequest
              }
            }).save(veiculo).$promise.then(onSuccess, onError)
          },

        updateVeiculo:
          function (veiculo, onSuccess, onError = genericOnError) {
            $resource(API_ENDPOINT_URI + '/veiculos/:id', { id: veiculo.id }, {
              save: {
                method: 'POST',
                isArray: false,
                headers: { 'Content-Type': undefined },
                transformRequest: transformRequest
              }
            }).save(veiculo).$promise.then(onSuccess, onError)
          },

          deleteVeiculo:
          function (veiculoId, onSuccess, onError = genericOnError) {
            $resource(API_ENDPOINT_URI + '/veiculos/:id', { id: veiculoId }, {
              delete: {
                method: 'DELETE',
                isArray: false
              }
            }).delete().$promise.then(onSuccess, onError)
          }

      }

    }
  ]);
