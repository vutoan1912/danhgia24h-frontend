/**
 * Created by toanvd2 on 12/11/2018.
 */

(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', '$state', '$rootScope'];

    function DashboardController ($scope, $state, $rootScope) {
        var vm = this;
        $rootScope.classBody = "dashboard_page";
    }
})();