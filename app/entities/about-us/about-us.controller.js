/**
 * Created by toanvd2 on 12/11/2018.
 */

(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .controller('AboutUsController', AboutUsController);

    AboutUsController.$inject = ['$scope', '$state', '$rootScope'];

    function AboutUsController ($scope, $state, $rootScope) {
        var vm = this;
        $rootScope.classBody = "about_us_page";
    }
})();