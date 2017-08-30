/**
 * Created by chent on 2017/1/18.
 */
var myApp = angular.module("myApp",['ui.router','ngMaterial','ngAria','ngAnimate','ngMdIcons','oc.lazyLoad'])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/app');
        $stateProvider

        //公共部分
            .state('app',{
                url:'/app',
                title:'首页',
                templateUrl:'views/public/app.html',
                resolve:{
                    load:['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'scripts/services/public-serv.js',
                            'scripts/controllers/home-ctrl.js'
                        ])
                    }]
                },
                controller:'HomeCtrl'
            })
            .state('about', {
                url:'/about',
                templateUrl:'views/public/about.html'
            })
            .state('error',{
                url:'/error',
                templateUrl:'404.html'
            })


            //产品模块
            .state('product',{
                url:'/product',
                templateUrl: 'views/public/main.html',
                abstract:true,
                resolve:{
                    load:['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'scripts/controllers/product-ctrl.js',
                            'scripts/services/product-serv.js',
                            'scripts/services/userinfo-serv.js',
                            'views/product/css/product.css'
                        ])
                    }]
                },
                controller:function($scope){
                    $scope.showCart = true;
                }
            })
            .state('product.productList',{
                url:'/productList',
                title:'产品',
                templateUrl:'views/product/productList.html',
                controller:'ProductCtrl'
            })

        //     //购物车和订单部分
        //     .state('order',{
        //         url:'/order',
        //         templateUrl: 'views/public/main.html',
        //         abstract:true,
        //         resolve:{
        //             load:['$ocLazyLoad', function($ocLazyLoad) {
        //                 return $ocLazyLoad.load([
        //                     'views/order/css/order.css',
        //                     'scripts/controllers/order-ctrl.js',
        //                     'scripts/services/cart-serv.js'
        //                 ])
        //             }]
        //         }
        //     })
        //
        //     //购物车
        //     .state('order.cart',{
        //         url:'/cart',
        //         title:'购物车',
        //         backState:'app',
        //         templateUrl:'views/order/cart.html',
        //         controller:'cartCtrl'
        //     })
        //
        //
        //
        // /**
        //  *  我的订单
        //  */
        //         .state('myorder',{
        //             url:'/myorder',
        //             templateUrl:'views/public/main.html',
        //             abstract:true,
        //             resolve:{
        //                 load:['$ocLazyLoad', function($ocLazyLoad) {
        //                     return $ocLazyLoad.load([
        //                             'scripts/controllers/myorder-ctrl.js',
        //                             'scripts/services/order-serv.js',
        //                             'views/myorder/css/myorder.css'
        //                         ]);
        //                 }]
        //             }
        //         })
        //         .state('myorder.orderList',{
        //             url:'/orderList',
        //             title:'订单',
        //             templateUrl:'views/myorder/orderList.html',
        //             controller:'OrderListCtrl'
        //         })







            /**
             * 个人信息
             */
            .state('profile',{
                url:'/profile',
                templateUrl:'views/public/main.html',
                abstract:true,
                resolve:{
                    load:['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'views/profile/js/areaData_v2.js',
                            'views/profile/js/iosSelect.js',
                            'scripts/controllers/profile-ctrl.js',
                            'scripts/services/userinfo-serv.js',
                            'scripts/services/account-serv.js',
                            'views/profile/css/personal_center.css',
                            'views/profile/css/iosSelect.css'
                        ]);
                    }]
                }
            })
            .state('profile.info',{
                url:'/info',
                title:'个人信息',
                templateUrl:'views/profile/info.html',
                controller:'InfoCtrl'
            })


            /**
             * 认证
             */
            .state('account',{
                url:'/account',
                templateUrl:'views/public/main.html',
                abstract:true,
                resolve:{
                    load:['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'views/account/assets/rsaoath.min.js',
                            'views/account/css/account.css',
                            'scripts/controllers/account-ctrl.js',
                            'scripts/services/account-serv.js'
                        ]);
                    }]
                }
            })
            .state('account.login',{
                url:'/login',
                title:'登录',
                templateUrl:'views/account/login.html',
                controller:'LoginCtrl'
            })


    }])
    .run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {

    }])
    .controller("RootCtrl",function ($scope) {

    });