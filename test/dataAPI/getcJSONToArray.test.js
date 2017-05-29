const assert = require('chai').assert,
  dummyJSON = require('../../app/dataAPI/_dummy_0JSONSerialisedContent'),
  getc2Array = require('../../app/dataAPI/getcJSONToArray');
  relevantKeys = require('../../app/dataAPI/relevantContentKeys');

describe('API for handling serialised JSON from Skillcast CFML content query', function(){
  // array of columns we are interested in
  //const relevantKeysIndex = [0,2,3,4,5,10,11,17,18,19,23,24,25,26,27,28,29,30];
  const filterCOLUMNS = getc2Array.filterCOLUMNS;
  let targetCOLUMNS = relevantKeys.concat(['parentid']);

  it('has a method \'.filterCOLUMNS\' that creates an array of indexes for the relevant keys from COLUMNS', function(){
    assert.isFunction(filterCOLUMNS, 'filterMethod is defined and is a function');
    assert.deepEqual(filterCOLUMNS(dummyJSON.COLUMNS), relevantKeys);
  });

  it('has a method \'.toArrayOfObjectsWithParentId\' that reduces the DATA array of arrays into array of objects each with keys that match targetCOLUMNS', function(){
    var reducedContent = getc2Array
      .toArrayOfObjectsWithParentId(dummyJSON)
      .forEach(function(c,i,a){
        assert.hasAllKeys(targetCOLUMNS);
      });
  });
});
