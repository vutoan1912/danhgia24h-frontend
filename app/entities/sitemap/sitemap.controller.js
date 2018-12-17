/**
 * Created by toanvd2 on 12/11/2018.
 */

(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .controller('SitemapController', SitemapController);

    SitemapController.$inject = ['$scope', '$state', '$rootScope'];

    function SitemapController ($scope, $state, $rootScope) {
        var vm = this;
        $rootScope.classBody = "sitemap_page";
    }
})();