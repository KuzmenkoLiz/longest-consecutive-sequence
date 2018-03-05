module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if (array.length == 0) {
    return 0;
  } else if (array.length == 1) {
    return 1;
  }

  var count = 1;
  var set = [];
  var newSet = [];

  if (array.length > 1) {
    set = sortNum(array);

    for (let i = 0; i < set.length; i++) {
      if (set[i] + 1 == set[i+1]) {
        count++;
      } else if (set[i+1] != set[i]) {
        newSet.push(count);
        count = 1;
      }
    }
    return Math.max.apply(null, newSet);
  }

  function sortNum(array) {
    var sorted = [];

    var middle = Math.floor(array.length/2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);

    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      } 
    }
    return sorted.concat(left).concat(right);
  }/**/

}
