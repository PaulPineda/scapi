const assert = require('assert');
const TEST_CONTENT_OUTPUT = require('../../app/dataAPI/_testOutput');

describe('DUMMY RESULTS: a 1D array of module elements as objects', function(){
  it('is an array', function(){
    let strType = Object.prototype.toString.call(TEST_CONTENT_OUTPUT);
    assert.strictEqual(strType, '[object Array]');
  });
  it('contains elements that are ALL of type object', function(){
    TEST_CONTENT_OUTPUT.forEach(function(elem){
      assert.strictEqual(Object.prototype.toString.call(elem), '[object Object]');
    });
  });
  it('contains elements where NONE have the property .parentid', function(){
    TEST_CONTENT_OUTPUT.forEach(function(elem){
      assert.strictEqual(elem.hasOwnProperty('parentid'), false);
    });
  });
});
