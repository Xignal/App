(function() {
    'use strict';

    angular.module('app')
        .directive('surveyTile', function () {
            return {
                templateUrl: 'app/dashboard/surveyTileDirective.html',
                restrict: 'EA',
                link: link(),
                scope: {
                    surveyName: '=',
                    surveyDate: '=',
                    surveyResponseCount: '='
                }
            };

            function link(scope, element, attrs) {
                //var results = [
                //    {
                //        surveyName: 'This is my survey name',
                //        surveyDate: '2015-03-08T01:01:18.291Z',
                //        surveyResponsesCount: '23',
                //        surveyQuestion:
                //    }
                //]
            }
        })
})();


