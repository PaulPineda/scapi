const assert = require('assert');
const dummyJSON = require('../../app/dataAPI/_dummy_0JSONSerialisedContent');

describe('DUMMY DATA: expect JSON with COLUMN and DATA properties', function(){
  it('is a valid JS object', function(){
    var strType = Object.prototype.toString.call(dummyJSON);
    assert.strictEqual(strType, '[object Object]')
  });
  it('has a COLUMNS key', function(){
    assert.strictEqual(dummyJSON.hasOwnProperty('COLUMNS'), true);
  });
  it('has a DATA key', function(){
    assert.strictEqual(dummyJSON.hasOwnProperty('DATA'), true);
  });
});
