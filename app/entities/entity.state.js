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
            .state('wish-list', {
                parent: 'app',
                url: '/wish-list',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/entities/wish-list/wish-list.html',
                        controller: 'WishListController',
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
            .state('shopping-cart', {
                parent: 'app',
                url: '/shopping-cart',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/entities/shopping-cart/shopping-cart.html',
                        controller: 'ShoppingCartController',
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
            //orders-list
            .state('orders-list', {
                parent: 'app',
                url: '/orders-list',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/entities/orders-list/orders-list.html',
                        controller: 'OrdersListController',
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