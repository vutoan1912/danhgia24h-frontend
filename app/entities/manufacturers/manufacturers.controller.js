/**
 * Created by toanvd2 on 12/6/2018.
 */

(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .controller('ManufacturersController', ManufacturersController);

    ManufacturersController.$inject = ['$scope', '$state', '$rootScope'];

    function ManufacturersController ($scope, $state, $rootScope) {
        var vm = this;
        $rootScope.classBody = "manufacturers_page";
    }
})();