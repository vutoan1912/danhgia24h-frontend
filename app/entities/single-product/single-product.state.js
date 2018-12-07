/**
 * Created by toanvd2 on 12/6/2018.
 */

(function() {
    'use strict';

    angular
        .module('danhgia24HApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('single-product', {
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
        });
    }
})();

