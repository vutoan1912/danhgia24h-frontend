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
            //orders-list
            .state('orders-list', {
                parent: 'app',
                url: '/orders-list',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/account/orders-list/orders-list.html',
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
            .state('wish-list', {
                parent: 'app',
                url: '/wish-list',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/account/wish-list/wish-list.html',
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
            //order-detail
            .state('order-detail', {
                parent: 'app',
                url: '/order-detail',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/account/order-detail/order-detail.html',
                        controller: 'OrderDetailController',
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
            //dashboard
            .state('dashboard', {
                parent: 'app',
                url: '/dashboard',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/account/dashboard/dashboard.html',
                        controller: 'DashboardController',
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
