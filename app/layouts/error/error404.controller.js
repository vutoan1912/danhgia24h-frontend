/**
 * Created by toanvd2 on 12/6/2018.
 */

(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .controller('Error404Controller', Error404Controller);

    Error404Controller.$inject = ['$scope', '$state', '$rootScope'];

    function Error404Controller ($scope, $state, $rootScope) {
        var vm = this;
        $rootScope.classBody = "404error_page";
    }
})();