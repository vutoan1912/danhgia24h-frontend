(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state','$rootScope'];

    function HomeController ($scope, Principal, LoginService, $state, $rootScope) {
        var vm = this;
        $rootScope.classBody = "cms-index-index cms-home-page";

        vm.account = null;
        vm.isAuthenticated = null;
        vm.login = LoginService.open;
        vm.register = register;
        $scope.$on('authenticationSuccess', function() {
            getAccount();
        });

        getAccount();

        function getAccount() {
            Principal.identity().then(function(account) {
                vm.account = account;
                vm.isAuthenticated = Principal.isAuthenticated;
            });
        }

        function register () {
            $state.go('register');
        }
    }
})();
