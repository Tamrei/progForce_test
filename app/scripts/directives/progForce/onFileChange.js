'use strict';


angular.module('sbAdminApp')
    .directive('onFileChange',function(){
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var onChangeHandler = scope.$eval(attrs.onFileChange);
                element.bind('change', onChangeHandler);
            }
        }
    });


