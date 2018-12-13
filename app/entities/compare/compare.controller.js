/**
 * Created by toanvd2 on 12/6/2018.
 */

(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .controller('CompareController', CompareController);

    CompareController.$inject = ['$scope', '$state', '$rootScope'];

    function CompareController ($scope, $state, $rootScope) {
        var vm = this;
        $rootScope.classBody = "compare_page";
    }
})();