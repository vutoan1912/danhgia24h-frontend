/**
 * Created by toanvd2 on 12/6/2018.
 */

(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .controller('BlogRightSidebarController', BlogRightSidebarController);

    BlogRightSidebarController.$inject = ['$scope', '$state', '$rootScope'];

    function BlogRightSidebarController ($scope, $state, $rootScope) {
        var vm = this;
        $rootScope.classBody = "blog_right_sidebar_page";
    }
})();