// Returns the first argument provided to it
function identity(value) {
  return value;
}

// Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false
function isNumber(value) {
  return typeof value === 'number';
}

// Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isNumber([1,2,3]); → true
function isArray(value) {
  return value.constructor === Array;
}

// Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isNumber([1,2,3]); → true
function isObject(value) {
  return value.constructor === Object;
}

// Creates a clone of value.
// var users = [{ 'user': 'barney' },{ 'user': 'fred' }];
// var shallowClone = clone(users);
// shallowClone[0].user === users[0].user → true
// shallowClone === users → true
function clone(value) {
  var ans = value;
  return ans;
}

// Return the size of collection by returning its length for array-like values or the number of own enumerable properties for objects.
// size([1,2,3]); → 3
// size({a: 1, b: 2}); → 2
function size(collection) {
  var count = 0;
  for (var i in collection) {
    count++;
  }
  return count;
}

// Returns the first element of an array.
// Returns undefined if array is empty
// first([1,2,3]); → 1
// first([]); → undefined
function first(array) {
  return array[0];
}

// Returns the last element of an array
// last([1,2,3]); → 3
// last([]); → undefined
function last(array) {
  return array[array.length-1];
}

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value)
      return i;
  };
  return -1;
}

// Creates a slice of array with n elements dropped from the beginning. n defaults to 1
// drop([1, 2, 3]); → [2, 3]
// drop([1, 2, 3], 2); → [3]
// drop([1, 2, 3], 5); → []
// drop([1, 2, 3], 0); → [1, 2, 3]
function drop(array, n) {
  n = typeof n === 'undefined' ? 1 : n;
  return array.slice(n);
}

// Creates a slice of array with n elements dropped from the end. n defaults to 1
// dropRight([1, 2, 3]); → [1, 2]
// dropRight([1, 2, 3], 2); → [1]
// dropRight([1, 2, 3], 5); → []
// dropRight([1, 2, 3], 0); → [1, 2, 3]
function dropRight(array, n) {
  n = typeof n === 'undefined' ? 1 : n;
  if (n)
    return array.slice(0, -n);
  return array;
}

//Creates a slice of array with n elements taken from the beginning. n defaults to 1
// take([1, 2, 3]); → [1]
// take([1, 2, 3], 2); → [1, 2]
// take([1, 2, 3], 5); → [1, 2, 3]
// take([1, 2, 3], 0); → []
function take(array, n) {
  n = typeof n === 'undefined' ? 1 : n;
  return array.slice(0, n);
}

// Iterates over elements of array invoking callback for each element.
// Callback(element/value, index/key, collection)
// forEach(['a','b','c'], function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }); → prints a,1,[1,2,3] b,2,[1,2,3] c,3,[1,2,3]
function forEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

// Iterates over elements of array in reverse invoking callback for each element.
// Callback(element/value, index/key, collection)
// forEach(['a','b','c'], function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }); → prints c,3,[1,2,3] b,2,[1,2,3] a,1,[1,2,3]
function forEachRight(array, callback) {
  for (var i = array.length - 1; i >= 0; i--) {
    callback(array[i], i, array);
  }
}

// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
function map(array, callback) {
  var ans = [];
  for (var i = 0; i < array.length; i++) {
    ans.push(callback(array[i], i, array));
  };
  return ans;
}

// Iterates over elements of collection, returning an array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback) {
  var ans = [];
  for (var i in collection) {
    var elem = callback(collection[i], i, collection);
    if (elem === true) {
      ans.push(collection[i])
    }
  }
  return ans;
}

// Removes all elements from array that callback returns truthy for and returns an array of the removed elements.
// remove([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [1,3]
// remove({a:1, b:2, c:3, d:4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [2,4]
// Challenge: use filter
function reject(collection, callback) {
  var ans = [];
  for (var i in collection) {
    var elem = callback(collection[i], i, collection);
    if (elem === false) {
      ans.push(collection[i])
    }
  }
  return ans;
}

// Creates a duplicate-value-free version of an array
// uniq([1,2,1]); → [1,2]
function uniq(array) {
  var ans = [];
  for (var i = 0; i < array.length; i++) {
    if (ans.indexOf(array[i]) === -1) {
      ans.push(array[i]);
    };
  };
  return ans;
}

// Gets the value of key from all elements in collection.
// pluck([{user: 'Bob', age: 20},{user: 'Sam', age: 25}], 'user'); → ['Bob','Sam']
function pluck(collection, key) {
  var ans = [];
  for (var i = 0; i < collection.length; i++) {
    ans.push(collection[i][key]);
  };
  return ans;
}

// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// reduce([1,2], function(sum,n) {
//  return sum + n;
// }); → 3
// reduce({a:1, b:2}, function(result, n, key) {
//  result[key] = n*3;
//  return result;
// }, {}); → {a:3, b:6}
function reduce(collection, callback, start) {
  var accum;
  if (typeof start === 'undefined') {
    accum = collection.shift()
  } else {
    accum = start;
  };
  for (var i = 0; i < collection.length; i++) {
    accum = callback(accum, collection[i])
  };
  return accum;
}


// This method is like reduce except that it iterates over elements of collection from right to left.
// reduceRight([1,2], function(sum,n) {
//  return difference - n;
// }); → 1
function reduceRight(collection, callback, start) {
  var accum;
  if (typeof start === 'undefined') {
    accum = collection.pop()
  } else {
    accum = start;
  };
  for (var i = collection.length - 1; i >= 0; i--) {
    accum = callback(accum, collection[i])
  };
  return accum;
}

// Flattens a nested array.
// flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
function flatten(array) {
  var ans = [];
  for (var i = 0; i < array.length; i++) {
    ans = ans.concat(array[i]);
  };
  return ans;
}

// Recursively flattens a nested array.
// flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
function flattenDeep(array) {
  var bool = true;
  while (bool) {
    var ans = [];
    for (var i = 0; i < array.length; i++) {
      ans = ans.concat(array[i]);
    };
    bool = !(array.length === ans.length);
    array = ans;
  }
  return ans;
}

// Assigns own enumerable properties of source object(s) to the destination object. Subsequent sources overwrite property assignments of previous sources.
// extend({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' }); → { 'user': 'fred', 'age': 40 }
function extend(object) {
  var ans = arguments[0], thisObj;
  for (var i = 1; i < arguments.length ; i++) {
    thisObj = arguments[i];
    for (var j in thisObj) {
      ans[j] = thisObj[j];
    };
  };
  return ans;
}

// Returns boolean of whether argument is classified as a String object
// isString('hi'); → true
// isString(5); → false
function isString(value) {
  return typeof value === 'string';
}

// Creates a deep clone of value.
// var users = [{ 'user': 'barney' },{ 'user': 'fred' }];
// var deepClone = cloneDeep(users)
// deepClone[0].user === users[0].user → true
// deepClone === users → false
function cloneDeep(value) {
  var ans = [];
  for (var i = 0; i < value.length; i++) {
    var obj = value[i];
    var clo = {}
    for (var j in obj) {
      clo[j] = obj[j]
    };
    ans.push(clo);
  };
  return ans;
}

// Returns a function that is restricted to invoking func once. Repeat calls to the function return the value of the first call.
function once(func) {
  var called = false;
  return function() {
    if (!called) {
      called = true;
      var output = func();
      return output;
    } else {
      return output;
    };
  };
}

// Returns a function that when called, will check if it has already computed the result for the given argument and return that value instead if possible.
function memoize(func) {
  var computed = {};
  return function(arg) {
    if (!(arg in computed)) {
      var output = func(arg);
      computed[arg] = output;
      return output;
    } else {
      return computed[arg]
    };
  };
}

// Invokes func after wait milliseconds. Any additional arguments are provided to func when it is invoked.
function delay(func, wait) {
  var args = [];
  for (var i = 2; i < arguments.length; i++) {
    args.push(arguments[i]);
  };
  setTimeout(function() {
    func.apply(this, args)
    }, wait);
}

// Returns a function that only invokes func at most once per every wait milliseconds.
function throttle(func, wait) {
  var delay = false;
  var lastValue = 'start';
  return function() {
    if (!delay) {
      lastValue = func();
      delay = true;
      setTimeout(function() {
        delay = false;
      }, wait);
    }
    return lastValue;
  }
}