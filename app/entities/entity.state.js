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
                    authorities: [],
                    pageTitle: 'singleProduct.title'
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
                        $translatePartialLoader.addPart('single-product');
                        return $translate.refresh();
                    }]
                }
            })
            .state('shop-grid', {
                parent: 'app',
                url: '/shop-grid',
                data: {
                    authorities: [],
                    pageTitle: 'shopGrid.title'
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
                        $translatePartialLoader.addPart('shop-grid');
                        return $translate.refresh();
                    }]
                }
            })
            .state('about-us', {
                parent: 'app',
                url: '/about-us',
                data: {
                    authorities: [],
                    pageTitle: 'aboutUs.title'
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
                        $translatePartialLoader.addPart('about-us');
                        return $translate.refresh();
                    }]
                }
            })
            .state('shop-list', {
                parent: 'app',
                url: '/shop-list',
                data: {
                    authorities: [],
                    pageTitle: 'shopList.title'
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
                        $translatePartialLoader.addPart('shop-list');
                        return $translate.refresh();
                    }]
                }
            })
            .state('shopping-cart', {
                parent: 'app',
                url: '/shopping-cart',
                data: {
                    authorities: [],
                    pageTitle: 'shoppingCart.title'
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
                        $translatePartialLoader.addPart('shopping-cart');
                        return $translate.refresh();
                    }]
                }
            })
            //manufacturers
            .state('manufacturers', {
                parent: 'app',
                url: '/manufacturers',
                data: {
                    authorities: [],
                    pageTitle: 'manufacturers.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/entities/manufacturers/manufacturers.html',
                        controller: 'ManufacturersController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('manufacturers');
                        return $translate.refresh();
                    }]
                }
            })
            .state('compare', {
                parent: 'app',
                url: '/compare',
                data: {
                    authorities: [],
                    pageTitle: 'compare.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/entities/compare/compare.html',
                        controller: 'CompareController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('compare');
                        return $translate.refresh();
                    }]
                }
            })
            .state('blog-items', {
                parent: 'app',
                url: '/blog-items',
                data: {
                    authorities: [],
                    pageTitle: 'blog.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/entities/blog-items/blog-items.html',
                        controller: 'BlogItemsController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('blog');
                        return $translate.refresh();
                    }]
                }
            })
            .state('blog-list', {
                parent: 'app',
                url: '/blog-list',
                data: {
                    authorities: [],
                    pageTitle: 'blog.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/entities/blog-list/blog-list.html',
                        controller: 'BlogListController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('blog');
                        return $translate.refresh();
                    }]
                }
            })
            .state('blog-right-sidebar', {
                parent: 'app',
                url: '/blog-right-sidebar',
                data: {
                    authorities: [],
                    pageTitle: 'blog.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/entities/blog-right-sidebar/blog-right-sidebar.html',
                        controller: 'BlogRightSidebarController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('blog');
                        return $translate.refresh();
                    }]
                }
            })
            .state('blog-detail', {
                parent: 'app',
                url: '/blog-detail',
                data: {
                    authorities: [],
                    pageTitle: 'blog.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/entities/blog-detail/blog-detail.html',
                        controller: 'BlogDetailController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('blog');
                        return $translate.refresh();
                    }]
                }
            })
            .state('sitemap', {
                parent: 'app',
                url: '/sitemap',
                data: {
                    authorities: [],
                    pageTitle: 'sitemap.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/entities/sitemap/sitemap.html',
                        controller: 'SitemapController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('site-map');
                        return $translate.refresh();
                    }]
                }
            })
            .state('faq', {
                parent: 'app',
                url: '/faq',
                data: {
                    authorities: [],
                    pageTitle: 'faq.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/entities/faq/faq.html',
                        controller: 'FaqController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('faq');
                        return $translate.refresh();
                    }]
                }
            })
        ;
    }
})();