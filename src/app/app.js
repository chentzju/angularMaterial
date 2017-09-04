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
                // console.log(isopen);
            };
            $scope.$watch('name', function(name) {
                console.log($scope.name);
                if(name==""){
                    $scope.users=$filter("filter")(users)
                }else{
                    $scope.users=$filter("filter")(users,name);
                }
            });
        })





    }])
    .controller("ManDetailCtrl",["$scope",'$stateParams','ManService',function ($scope,$stateParams,ManService) {


    }])