(function() {
'use strict';

describe("karma tests", function() {
    beforeEach(function (){
        module('karmaTest');
        module('served/mock-data.json');





        var karmaTestMockData = function(){
            return {"testData":"testValue2"};
        };


    });

    beforeEach(function (){
        var karmaTestService;
        var scope;
        var testFixture;
        //console.log('######'+testFixture);
        inject(function($rootScope, _KarmaTestService_) {
            scope = $rootScope.$new();
            karmaTestService = _KarmaTestService_;
        });
        inject(function (_servedMockData_) {
            testFixture = _servedMockData_;
        });

        it('verify karma test getMockJSONData', function () {
            spyOn(karmaTestService, 'getMockJSONData');
            console.log('######'+testFixture);
            expect(testFixture).toEqual(karmaTestService.getMockJSONData());
        });

    });
});
})();
