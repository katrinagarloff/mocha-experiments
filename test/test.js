let convert = require('../app/index.js');
let myFunctions = require('../app/my-functions.js')
let assert = require('assert');


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Math', function() {
  describe('3*3', function() {
    it('should test if 3*3 = 9', function(){
      assert.equal(9, 3*3);
    });
  });
});

describe('Math', function() {
  describe('(3-4*8)', function(){
    it('should test if (3-4)*8 = -8', function(){
      assert.equal(-8, (3-4)*8);
    });
  });
});

describe('Temperature Conversion', function() {
  describe('cToF', function() {
    it('should convert -40 celsius to -40 fahrenheit', function() {
      assert.equal(-40, convert.cToF(-40));
    });
    it('should convert 0 celsius to 32 fahrenheit', function() {
      assert.equal(32, convert.cToF(0));
    });
    it('should return undefined if no temperature is input', function(){
      assert.equal(undefined, convert.cToF(''));
    });
  });
  describe('fToC', function() {
    it('should convert -40 fahrenheit to -40 celsius', function() {
      assert.equal(-40, convert.fToC(-40));
    });
    it('should convert 32 fahrenheit to 0 celsius', function() {
      assert.equal(0, convert.fToC(32));
    });
    it('should return undefined if no temperature is input', function(){
      assert.equal(undefined, convert.fToC(''));
    });
  });
});

describe('My Functions', function() {
  describe('hello', function(){
    it('should return the string "hello"', function(){
      assert.equal('hello', myFunctions.hello());
    });
  });
  describe('arrayTimesTen', function(){
    it('should multiply array elements by ten and return a new array of those values', function() {
      assert.equal([10, 20, 30][0], myFunctions.arrayTimesTen([1, 2, 3])[0]);
    });
  });
});
