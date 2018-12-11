/**
 * Created by toanvd2 on 12/6/2018.
 */

(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .controller('SingleProductController', SingleProductController);

    SingleProductController.$inject = ['$scope', '$state', '$rootScope'];

    function SingleProductController ($scope, $state, $rootScope) {
        var vm = this;
        $rootScope.classBody = "product-page";
    }
})();