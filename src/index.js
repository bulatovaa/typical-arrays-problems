
exports.min = function min (array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  const arrSort = array.sort((a, b) => a - b);
  return arrSort[0];
}

exports.max = function max (array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  const arrSort = array.sort((a, b) => b - a);
  return arrSort[0];
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  const arrSort = array.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < arrSort.length; i++) {
    sum += arrSort[i];
  }
  return sum / array.length;
}
