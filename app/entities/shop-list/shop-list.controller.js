/**
 * Created by toanvd2 on 12/6/2018.
 */

(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .controller('ShopListController', ShopListController);

    ShopListController.$inject = ['$scope', '$state', '$rootScope'];

    function ShopListController ($scope, $state, $rootScope) {
        var vm = this;
        $rootScope.classBody = "shop_list_page";
    }
})();