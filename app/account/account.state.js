(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
            .state('account', {
                abstract: true,
                parent: 'app'
            })
            /*.state('shop-list', {
                parent: 'app',
                url: '/shop-list',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/entities/shop-list/shop-list.html',
                        controller: 'ShopListController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('singlepr');
                        return $translate.refresh();
                    }]
                }
            })*/
        ;
    }
})();
