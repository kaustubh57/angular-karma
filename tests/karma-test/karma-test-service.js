(function() {
'use strict';

describe("karma tests", function() {
    beforeEach(function (){
        module('karmaTest');
    });

    describe ("karma test", function() {
        var karmaTestService;
        var scope;
        beforeEach(function (){
            inject(function($rootScope, _KarmaTestService_) {
                scope = $rootScope.$new();
                karmaTestService = _KarmaTestService_;
            });
        });

        var karmaTestMockData = function(){
            return {"testData":"testValue"};
        };

        it('verify karma test getMockJSONData', function () {
            expect(karmaTestService.getMockJSONData()).toEqual(karmaTestMockData());
        });
    });
});
})();
