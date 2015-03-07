(function () {
    'use strict';

    var controllerId = 'response';
    angular.module('app').controller(controllerId, ['api', response]);

    function response(api) {
        var vm = this;
    };
})();