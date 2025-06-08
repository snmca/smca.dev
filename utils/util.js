function getTypeName(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

function collectionGlob(collectionApi, collectionName) {
  return collectionApi.getFilteredByGlob(`content/{collectionName/*.md`).filter(item => {
    return !item.inputPath.endsWith("index.md");
  });
}


module.exports = { getTypeName, collectionGlob};
