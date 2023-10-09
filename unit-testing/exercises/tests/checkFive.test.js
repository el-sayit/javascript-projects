const checkFive = require('../checkFive.js');
describe('checkFive', function(){
    test('should return result stating given number is less than 5', function(){
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });
    test('should return stating given number is greater than 5', function(){
        let output=checkFive(8);
        expect(output).toEqual('8 is greater than 5.');
    });
    test('should return stating 5 is equal to 5', function() {
        let output = checkFive(5);
        expect(output).toBe('5 is equal to 5.');
    });
})