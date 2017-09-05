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


        // 样式

        /* Variables */
        // $scope.AnimEnd = 'animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd';
        // var nav = angular.element('.nav');
        // var navButton = angular.element('.nav-el');
        // var overlay = angular.element('.overlay');
        //
        // /* On menu button click event */
        // $scope.showDetails = function(event){
        //
        //     /* This conditional statement is here to prevent
        //      clicks on inactive buttons on IE10, as pointer-events
        //      cannot be applied on non-SVG elements */
        //
        //     if ($(this).hasClass("inactive")) {
        //
        //         event.preventDefault();
        //
        //     } else {
        //
        //         /* Remove old previous classes */
        //         $(navButton).removeClass('inactive_reverse active_reverse');
        //         angular.element('.nav').removeClass('fx-box_rotate fx-box_rotate_reverse');
        //         $(overlay).removeClass('active active_reverse');
        //
        //         /* Add classes on defined elements */
        //         $(this).siblings().addClass('inactive');
        //         $(this).addClass('active');
        //         angular.element('.nav').addClass('fx-box_rotate');
        //
        //         /* Activate related overlay */
        //         var o_target = $(this).data('id');
        //         $('#'+o_target).addClass('active');
        //
        //         /* Prevent scrolling */
        //         angular.element("body").addClass('noscroll');
        //
        //     }
        //
        // };
        // $scope.showDetails = function($event){
        //     console.log($event);
        //     console.log(this);
        //     $scope.active = true;
        //     // if ($event.hasClass("inactive")) {
        //     //
        //     //     event.preventDefault();
        //     //
        //     // } else {
        //     //
        //     // }
        //
        //
        // };
        /* On close button click event */
        // $(".close").click(function(){
        //
        //     /* Add *_reverse classes */
        //     $('.active', nav).removeClass('active').addClass('active_reverse');
        //     $('.inactive', nav).addClass('inactive_reverse');
        //     $(nav).addClass('fx-box_rotate_reverse');
        //     $(this).parent().addClass('active_reverse');
        //
        //     /* Remove .noscroll and .inactive when animation is finished */
        //     $('.inactive_reverse').bind($scope.AnimEnd, function(){
        //
        //         $('body').removeClass('noscroll');
        //         $(navButton).removeClass('inactive');
        //         $('.inactive_reverse').unbind($scope.AnimEnd);
        //
        //     });
        //
        // });



        ManService.then(function (result) {
            var users=result.data.dateList;

            $scope.users = ABCSort(users);
            // newUsers.forEach(function(item){
            //     $scope.users.push(item)
            // })
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