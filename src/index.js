module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if (array.length == 0) {
    return 0;
  }
  
  var set = [];
  var max = 1;
  var l, r;

  for (let i = 0; i < array.length; i++) {
    set.push(array[i]);
  }

  for (let i = 0; i < array.length; i++) {
    l = array[i] -1;
    r = array[i] +1;
    var count = 1;

    while (set.indexOf(l) != -1) {
      count++;
      set.splice(set.indexOf(l), 1);
      l--;
    }

    while (set.indexOf(r) != -1) {
      count++;
      set.splice(set.indexOf(r), 1);
      r++;
    }

    max = Math.max(count, max);
  }
  return max;

}
