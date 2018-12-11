(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
            .state('entity', {
                abstract: true,
                parent: 'app'
            })
            .state('single-product', {
                parent: 'app',
                url: '/single-product',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/entities/single-product/single-product.html',
                        controller: 'SingleProductController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('singlepr');
                        return $translate.refresh();
                    }]
                }
            })
            .state('shop-grid', {
                parent: 'app',
                url: '/shop-grid',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/entities/shop-grid/shop-grid.html',
                        controller: 'ShopGridController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('singlepr');
                        return $translate.refresh();
                    }]
                }
            })
            .state('about-us', {
                parent: 'app',
                url: '/about-us',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/entities/about-us/about-us.html',
                        controller: 'AboutUsController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('singlepr');
                        return $translate.refresh();
                    }]
                }
            })
            .state('shop-list', {
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
            })
        ;
    }
})();