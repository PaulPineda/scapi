module.exports = (function api(app){
  return {
    getIndices: (targetArray, TARGET_COLUMNS) => {
      return targetArray.reduce((indices,c,i) => {
        if(c.toLowerCase() in filterKeysObject)
          indices.push(i);
        return indices;
      }, []);
    },
    dataArrayElementToObject: (targetElementArray, indices, filterKeysObject) => {
      return indices.reduce((acc,c,i) => {
        var label = filterKeysObject[i],
        value = targetElementArray[c];
        acc[label] = value;
        console.log(value, label);
        return acc;
      }, {});
    },
    flattenData = (dataArray, indices, TARGET_COLUMNS)
  }
})(this);
