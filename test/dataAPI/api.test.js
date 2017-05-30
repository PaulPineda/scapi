const assert = require('chai').assert,
  testContent_INPUT = require('../../app/dataAPI/_testInput'),
  testContent_OUTPUT = require('../../app/dataAPI/_testOutput'),
  testContent_OUTPUT_FINAL = require('../../app/dataAPI/_testOutputWithParentId'),
  api = require('../../app/dataAPI/api'),
  TARGET_COLUMNS = require('../../app/dataAPI/TARGET_COLUMNS'),
  COLUMNS_ALL = require('../../app/dataAPI/_testColumnsAll');

describe('API for handling serialised JSON from Skillcast CFML content query', function(){
  // see if this is carried forward through the testing once set
  // indices is relied upon by later tests so start with undefined, then ensure it
  // works and then use it to conduct later tests
  let indices;

  describe('.getIndices(columns:Array, TARGET_COLUMNS:Object):Array', () => {
    let columns = testContent_INPUT.COLUMNS;

    it('is a function', () => {
      assert.isFunction(api.getIndices, 'getIndices exists and is a Function')
    });
    it('returns array of indices for the position of TARGET_COLUMNS within targetArray', () => {
      indices = api.getIndices(columns, TARGET_COLUMNS);
      assert.isArray(indices, 'is an array');
      indices.forEach((c) => assert.isNumber(c));
    });
  });

  describe('.dataArrayElementToObject(targetElement:Array, indices:Array, TARGET_COLUMNS:Object):Object', () => {
    let targetElementArray = testContent_INPUT.DATA[0],
      expected = testContent_OUTPUT[0];

    it('is a function', () => {
      assert.isFunction(api.dataArrayElementToObject, 'getIndices exists and is a Function')
    });

    it('returns an element object from targetElementArray', () => {
      api.dataArrayElementToObject(targetElementArray, indices, TARGET_COLUMNS)
    });
  });

  describe('.flattenData(data:Array, indices:Array, TARGET_COLUMNS:Object):Array', () => {
    let data = testContent_INPUT.DATA,
      expected = testContent_OUTPUT,
      result;

    it('is a function', () => {
      assert.isFunction(api.flattenData, 'getIndices exists and is a Function')
    });

    it('returns an array of element objects', () => {
      result = api.flattenData(data, indices, TARGET_COLUMNS);
      assert.deepEqual(result, expected);
    });
  });

  describe('.addPropertyToOutput(data:Array, propertiesToAdd:Object):Array', () => {
    let propertiesToAdd = { parentid: null };
    it('is a function', () => {
      assert.isFunction(api.addPropertyToOutput, 'getIndices exists and is a Function')
    });

    it('returns an array of element objects', () => {
      result = api.flattenData(data, indices, TARGET_COLUMNS);
      assert.deepEqual(result, expected);
    });
  });
});
