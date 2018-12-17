/**
 * Created by toanvd2 on 12/6/2018.
 */

(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .controller('BlogItemsController', BlogItemsController);

    BlogItemsController.$inject = ['$scope', '$state', '$rootScope'];

    function BlogItemsController ($scope, $state, $rootScope) {
        var vm = this;
        $rootScope.classBody = "blog_page";
    }
})();