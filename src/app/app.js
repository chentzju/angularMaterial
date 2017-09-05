var myApp = angular.module("myApp",['ui.router','ngMaterial','ngAria','ngAnimate'])
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
            .state('manList',{
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
    .controller("ManCtrl",["$scope","ManService","$filter",function ($scope,ManService,$filter) {

        $scope.clickIcon = 'thumb_up';
        $scope.clickIconMorph = function() {
            if ($scope.clickIcon === 'thumb_up') {
                $scope.clickIcon = 'thumb_down';
            }
            else {
                $scope.clickIcon = 'thumb_up';
            }
        };



        ManService.then(function (result) {
            var users=result.data.dateList;
            listSort(users);
            $scope.users = users;
            console.log($scope.users)
            //实现查询功能
            var isopen=true;
            $scope.sort=function(str){
                $scope.users=$filter("orderBy")($scope.users,str,isopen);
                isopen=!isopen;
            };
            $scope.$watch('searchText', function(searchText) {
                console.log($scope.searchText);
                if(searchText === ""){
                    $scope.users=$filter("filter")(users);
                    console.log($scope.users)
                }else{
                    $scope.users=$filter("filter")(users,searchText);
                    console.log($scope.users)
                }
            });
        })





    }])
    .controller("ManDetailCtrl",["$scope",'$stateParams','ManService',function ($scope,$stateParams,ManService) {


    }])