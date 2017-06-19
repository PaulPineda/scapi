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
  let indices,
    columns = testContent_INPUT.COLUMNS;

  describe('.createColumnsIndexMap(columns:Array, TARGET_COLUMNS:Array):Object', () => {
      it('is a function', () => {
        assert.isFunction(api.createColumnsIndexMap, 'createColumnsIndexMap exists and is a function')
      });
      it('returns a hash map of target columns and indices', () => {
        var indexMap = createColumnsIndexMap(columns, TARGET_COLUMNS);
        
      });
  });

  describe('.getIndices(columns:Array, TARGET_COLUMNS:Object):Array', () => {


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
      assert.isFunction(api.dataArrayElementToObject, 'dataArrayElementToObject exists and is a Function')
    });

    it('returns an element object from targetElementArray', () => {
      const newElemObj = api.dataArrayElementToObject(targetElementArray, indices, TARGET_COLUMNS);
      assert.deepEqual(newElemObj, expected);
    });
  });

  describe('.flattenData(data:Array, indices:Array, TARGET_COLUMNS:Object):Array', () => {
    let data = testContent_INPUT.DATA,
      expected = testContent_OUTPUT,
      result;

    it('is a function', () => {
      assert.isFunction(api.flattenData, 'flattenData exists and is a Function')
    });

    it('returns an array of element objects', () => {
      result = api.flattenData(data, indices, TARGET_COLUMNS);
      assert.deepEqual(result, expected);
    });
  });

  describe('.addPropertyToOutput(data:Array, propertiesToAdd:Object):Array', () => {
    let propertiesToAdd = { parentid: null };
    it('is a function', () => {
      assert.isFunction(api.addPropertyToOutput, 'addPropertyToOutput exists and is a Function')
    });

    it('returns an array of element objects', () => {
      result = api.flattenData(data, indices, TARGET_COLUMNS);
      assert.deepEqual(result, expected);
    });
  });
});
