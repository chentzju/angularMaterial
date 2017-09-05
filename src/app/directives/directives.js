
angular.module('myApp')
    .directive('toggleClass',function () {
        return {
            restrict:'A',
            scope:{
                toggleClass:'@'
            },
            link:function (scope,element) {
                element.on('click',function () {
                    element.toggleClass(scope.toggleClass);
                })
            }
        }
    })

    // .directive('listActive',function () {
    //     return {
    //         restrict:'A',
    //         scope:{
    //             listActive:'@'
    //         },
    //         link:function (scope,element) {
    //             var list = angular.element(document).find('#list')
    //             element.on('click',function () {
    //
    //                 list.find('.list-el').removeClass('inactive_reverse active_reverse').addClass('inactive');
    //                 list.removeClass('rotate rotate_reverse').addClass('rotate');
    //                 list.find('.overlay').removeClass('active active_reverse');
    //                 angular.element(this).removeClass('inactive');
    //                 angular.element(this).addClass('active');
    //
    //
    //
    //                 var o_target = angular.element(this).data('id');
    //                 console.log(o_target)
    //                 angular.element(document).find('#'+o_target).addClass('active');
    //             })
    //         }
    //     }
    // })

    .directive('listActive',function () {
        return {
            restrict:'A',
            scope:{
                listActive:'@'
            },
            link:function (scope,element) {
                element.on('click',function () {

                    var detail_target = angular.element(this).attr('data-id');
                    var de = document.getElementById(detail_target);
                    de.setAttribute('class','active list-detail')
                    angular.element(this).find('.md-card-image').addClass('aa')
                    // angular.element(document).find('#'+detail_target).addClass('active');
                    // list.find('.list-el').removeClass('inactive_reverse active_reverse').addClass('inactive');
                    // list.removeClass('rotate rotate_reverse').addClass('rotate');
                    // list.find('.overlay').removeClass('active active_reverse');
                    // angular.element(this).removeClass('inactive');
                    // angular.element(this).addClass('active');
                    //
                    //
                    //
                    // var o_target = angular.element(this).data('id');
                    // console.log(o_target)
                    // angular.element(document).find('#'+o_target).addClass('active');
                })
            }
        }
    })

