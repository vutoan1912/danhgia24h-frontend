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
        vm.authorities = ['ROLE_ADMIN'];

        //init tab
        //angular.element(document.querySelector('tab_description')).addClass("active");
        $scope.arr_tabs = ['tab_description','tab_reviews','tab_product_tags','tab_custom_tabs'];
        $scope.tab_id = 'tab_description';
        $scope.tabClick = function (tab_id) {
            $scope.tab_id = tab_id;
        };
        function checkAdult(tab) {
            return $scope.tab_id === tab;
        }
        $scope.checkTabCss = function () {
            return $scope.arr_tabs.findIndex(checkAdult);
        };

    }
})();