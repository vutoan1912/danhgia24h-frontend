/**
 * Created by toanvd2 on 12/6/2018.
 */

(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .controller('ShopGridController', ShopGridController);

    ShopGridController.$inject = ['$scope', '$state', '$rootScope'];

    function ShopGridController ($scope, $state, $rootScope) {
        var vm = this;
        $rootScope.classBody = "shop_grid_page";
    }
})();