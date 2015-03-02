(function () {
  "use strict";
  angular.module('AirplaneApp')
    .controller('MainController', function (AirplaneProductsService, $scope) {
        var mainCtrl = this; // the scope of our controller is 'this'

        mainCtrl.products = AirplaneProductsService.getProducts();

        mainCtrl.product = AirplaneProductsService.getProduct();

        mainCtrl.addProduct = function (newProduct) {
          AirplaneProductsService.addProduct(newProduct);
          $scope.newProduct = {};
        };

        mainCtrl.deleteProduct = function(product) {
          AirplaneProductsService.deleteProduct(product);
        };

        mainCtrl.editProduct = function(product) {
          AirplaneProductsService.editProduct(product);
          $scope.newProduct = {};
        };

    });

})();
