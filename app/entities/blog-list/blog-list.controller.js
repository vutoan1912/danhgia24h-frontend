/**
 * Created by toanvd2 on 12/6/2018.
 */

(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .controller('BlogListController', BlogListController);

    BlogListController.$inject = ['$scope', '$state', '$rootScope'];

    function BlogListController ($scope, $state, $rootScope) {
        var vm = this;
        $rootScope.classBody = "blog_fullwidth_page";
    }
})();