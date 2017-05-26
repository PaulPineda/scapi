const assert = require('assert');
const dummyData = require('../../app/dataAPI/_dummy_1DataFilteredAndMapped');

describe('DUMMY RESULTS: a 1D array of module elements as objects', function(){
  it('is an array', function(){
    let strType = Object.prototype.toString.call(dummyData);
    assert.strictEqual(strType, '[object Array]');
  });
  it('contains elements that are ALL of type object', function(){
    dummyData.forEach(function(elem){
      assert.strictEqual(Object.prototype.toString.call(elem), '[object Object]');
    });
  });
  it('contains elements where NONE have the property .parentid', function(){
    dummyData.forEach(function(elem){
      assert.strictEqual(elem.hasOwnProperty('parentid'), false);
    });
  });
});
