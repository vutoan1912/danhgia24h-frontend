(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .factory('PasswordResetFinish', PasswordResetFinish);

    PasswordResetFinish.$inject = ['$resource'];

    function PasswordResetFinish($resource) {
        var service = $resource('api/account/reset-password/finish', {}, {});

        return service;
    }
})();
