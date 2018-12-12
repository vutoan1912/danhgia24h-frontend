/**
 * Created by toanvd2 on 12/11/2018.
 */

(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .controller('ShoppingCartController', ShoppingCartController);

    ShoppingCartController.$inject = ['$scope', '$state', '$rootScope'];

    function ShoppingCartController ($scope, $state, $rootScope) {
        var vm = this;
        $rootScope.classBody = "shopping_cart_page";
    }
})();