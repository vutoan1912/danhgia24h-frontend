/**
 * Created by toanvd2 on 12/11/2018.
 */

(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .controller('OrdersListController', OrdersListController);

    OrdersListController.$inject = ['$scope', '$state', '$rootScope'];

    function OrdersListController ($scope, $state, $rootScope) {
        var vm = this;
        $rootScope.classBody = "orders_list_page";
    }
})();