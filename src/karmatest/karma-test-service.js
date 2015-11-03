(function() {
'use strict';
angular.module('karmaTest',[])

// Storyboard canvas object and functions
.factory('KarmaTestService',
    function () {
        var KarmaTestService = {};

        KarmaTestService.getMockJSONData = function() {
            return {"testData":"testValue"};
        };

        return KarmaTestService;
    }
);
})();