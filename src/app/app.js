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
            .state('manList.manDetail',{
            url:'/manList/manDetail',
            title:'人员列表',
            templateUrl:'views/man/manDetail.html',
            controller:'ManCtrl'
        })





    }])
    .controller("RootCtrl",['$scope',function ($scope) {



    }])

    .controller("HomeCtrl",['$scope','$state','PublicService',function ($scope,$state,PublicService) {



    }])
    .controller("ManCtrl",["$scope","ManService","$filter",function ($scope,ManService,$filter) {

        // 样式

         $scope.closeDe = function (id) {
             var id = 'active_'+id;
             var de = document.getElementById(id);
             de.setAttribute('class','list-detail')
         }


        ManService.then(function (result) {
            var users=result.data.dateList;
            var newUser = [];
            $scope.users = [];

            newUser = ABCSort(users);
            for (var i=0;i<newUser.length;i++){
                $scope.users.push(newUser[i]);
            };

            //实现查询功能
            // var isopen=true;
            // $scope.sort=function(str){
            //     $scope.users=$filter("orderBy")($scope.users,str,isopen);
            //     isopen=!isopen;
            //     // console.log(isopen);
            // };
            var inp=document.getElementById("input-0");
            inp.addEventListener("click",function(){
                $scope.$watch('searchText', function(searchText) {
                    if(searchText===""){
                        $scope.users=$filter("filter")(newUser)
                        console.log($scope.users)
                    }else{
                        $scope.users=$filter("filter")(newUser,searchText);
                    }
                });
            })

        })

    }])