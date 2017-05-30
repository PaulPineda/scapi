const assert = require('assert');
const TEST_CONTENT_INPUT = require('../../app/dataAPI/_testInput');

describe('DUMMY DATA: expect JSON with COLUMN and DATA properties', function(){
  it('is a valid JS object', function(){
    var strType = Object.prototype.toString.call(TEST_CONTENT_INPUT);
    assert.strictEqual(strType, '[object Object]')
  });
  it('has a COLUMNS key', function(){
    assert.strictEqual(TEST_CONTENT_INPUT.hasOwnProperty('COLUMNS'), true);
  });
  it('has a DATA key', function(){
    assert.strictEqual(TEST_CONTENT_INPUT.hasOwnProperty('DATA'), true);
  });
});
