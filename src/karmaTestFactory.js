angular.module('mockingServices',[])
    .factory('KarmaTestFactory', function(){

        var KarmaTestFactory = {};

        KarmaTestFactory.isNumber = function(num){
            return !isNaN(num);
        };

        KarmaTestFactory.isDate = function(date){
            return (date instanceof Date);
        };

        return KarmaTestFactory;
    });