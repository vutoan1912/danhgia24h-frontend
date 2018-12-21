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
        //var vm = this;
        $rootScope.classBody = "product-page";

        //init tab
        $scope.arr_tabs = ['tab_description','tab_reviews','tab_product_tags','tab_custom_tabs'];
        $scope.arr_tabs_content = ['tab_content_description','tab_content_reviews','tab_content_product_tags','tab_content_custom_tabs'];
        $scope.tab_click = function (tab_id, tab_content_id) {
            /*angular.forEach($scope.arr_tabs, function(elem) {
                if (elem == tab_id) {
                    angular.element(document.querySelector(elem)).addClass("active");
                }else{
                    angular.element(document.querySelector(elem)).removeClass("active");
                }
            });*/
            angular.element(document.querySelector(tab_id)).addClass("active");

            /*angular.forEach($scope.arr_tabs_content, function(elem) {
                if (elem == tab_content_id) {
                    console.log(tab_content_id);
                    angular.element(document.querySelector(elem)).removeClass("fade");
                    angular.element(document.querySelector(elem)).addClass("fade active in");
                }else{
                    angular.element(document.querySelector(elem)).addClass("fade");
                    angular.element(document.querySelector(elem)).removeClass("fade active in");
                }
            });*/
        };

        $scope.tab_click('tab_description', 'tab_content_description');

    }
})();