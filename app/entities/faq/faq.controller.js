/**
 * Created by toanvd2 on 12/11/2018.
 */

(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .controller('FaqController', FaqController);

    FaqController.$inject = ['$scope', '$state', '$rootScope'];

    function FaqController ($scope, $state, $rootScope) {
        var vm = this;
        $rootScope.classBody = "faq_page";
    }
})();