var myApp = angular.module("myApp",['ui.router','ngMaterial','ngAria','ngAnimate','ngMdIcons'])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/app');
        $stateProvider
            .state('app',{
                url:'/app',
                title:'首页',
                templateUrl:'views/public/app.html',
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
            .state('man.manList',{
                url:'/manList',
                title:'人员列表',
                templateUrl:'views/man/manList.html',
                controller:'ManCtrl'
            })





    }])
    .controller("RootCtrl",['$scope',function ($scope) {



    }])

    .controller("HomeCtrl",['$scope','$state','PublicService',function ($scope,$state,PublicService) {



    }])
    .controller("ManCtrl",["$scope","$http","ProductService",function ($scope,$http,ProductService) {
        $http.get("resource/resource.json").success(function(data) {
            $scope.data = data.dateList;
            console.log(data)
        })
    }])
    .controller("ManDetailCtrl",["$scope",'$stateParams','ManService',function ($scope,$stateParams,ProductService) {


    }])