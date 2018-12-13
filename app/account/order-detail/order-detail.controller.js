/**
 * Created by toanvd2 on 12/11/2018.
 */

(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .controller('OrderDetailController', OrderDetailController);

    OrderDetailController.$inject = ['$scope', '$state', '$rootScope'];

    function OrderDetailController ($scope, $state, $rootScope) {
        var vm = this;
        $rootScope.classBody = "order_details_page";
    }
})();