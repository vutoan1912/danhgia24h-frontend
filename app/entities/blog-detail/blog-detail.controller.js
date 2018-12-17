/**
 * Created by toanvd2 on 12/6/2018.
 */

(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .controller('BlogDetailController', BlogDetailController);

    BlogDetailController.$inject = ['$scope', '$state', '$rootScope'];

    function BlogDetailController ($scope, $state, $rootScope) {
        var vm = this;
        $rootScope.classBody = "single_post_page";
    }
})();