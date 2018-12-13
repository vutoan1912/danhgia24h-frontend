/**
 * Created by toanvd2 on 12/11/2018.
 */

(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .controller('WishListController', WishListController);

    WishListController.$inject = ['$scope', '$state', '$rootScope'];

    function WishListController ($scope, $state, $rootScope) {
        var vm = this;
        $rootScope.classBody = "wishlist_page";
    }
})();