describe('mocking service', function(){
    var isNumber, karmaTestFactory;

    beforeEach(function(){
        module('KarmaTestFactory');

        beforeEach(inject(function(_KarmaTestFactory_){
            karmaTestFactory=_KarmaTestFactory_;
        }));

        it('should have mocked utilSvc', function(){
            expect(karmaTestFactory.isNumber).not.toBe(undefined);
            expect(karmaTestFactory.isNumber.calls).not.toBe(undefined);

            expect(karmaTestFactory.isDate).not.toBe(undefined);
            expect(karmaTestFactory.isDate.calls).not.toBe(undefined);

        });
    });


});