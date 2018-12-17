(function() {
    'use strict';

    angular
        .module('danhgia24HApp', [
            'ngStorage',
            'tmh.dynamicLocale',
            'pascalprecht.translate',
            'ngResource',
            'ngCookies',
            'ngAria',
            'ngCacheBuster',
            'ngFileUpload',
            'ui.bootstrap',
            'ui.bootstrap.datetimepicker',
            'ui.router',
            'infinite-scroll',
            // jhipster-needle-angularjs-add-module JHipster will add new module here
            'angular-loading-bar'
        ])
        .run(run);

    run.$inject = ['stateHandler', 'translationHandler','$rootScope'];

    function run(stateHandler, translationHandler, $rootScope) {
        stateHandler.initialize();
        translationHandler.initialize();
        $rootScope.classBody = "cms-index-index cms-home-page";

        $rootScope.$on('$stateChangeSuccess', function () {

            //console.log('stateChangeSuccess');

        });

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

            //console.log(fromState);
            //console.log(toState);

        });
    }
})();
