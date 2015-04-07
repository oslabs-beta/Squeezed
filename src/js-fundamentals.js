// Returns the first argument provided to it
function identity(value) {
  return value;
}

// Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false
function isNumber(value) {
  return  typeof value == "number";
}

// Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isArray([1,2,3]); → true
function isArray(value) {
  return Array.isArray(value);
}

// Returns boolean of whether argument is classified as an Object
// isObject(5); → false
// isObject([1,2,3]); → true
function isObject(value) {
  if(Array.isArray(value)) return false;
  return typeof value === "object";
}

// Creates a clone of value.
// var users = [{ 'user': 'barney' },{ 'user': 'fred' }];
// var shallowClone = clone(users);
// shallowClone[0].user === users[0].user → true
// shallowClone === users → true
function clone(value) {
  var ret = {};
  Object.keys(value).forEach(function(k){
    ret[k] = value[k];
  });
  return ret;
}

// Return the size of collection by returning its length for array-like values or the number of own enumerable properties for objects.
// size([1,2,3]); → 3
// size({a: 1, b: 2}); → 2
function size(collection) {
  return Object.keys(collection).length;
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
  for(var i=0,l=array.length;i<l;i++){
    if(array[i] == value) return i;
  }
  return -1;
}

// Creates a slice of array with n elements dropped from the beginning. n defaults to 1
// drop([1, 2, 3]); → [2, 3]
// drop([1, 2, 3], 2); → [3]
// drop([1, 2, 3], 5); → []
// drop([1, 2, 3], 0); → [1, 2, 3]
function drop(array, n) {
  if(typeof n === "undefined") n = 1;
  return array.slice(n);
}

// Creates a slice of array with n elements dropped from the end. n defaults to 1
// dropRight([1, 2, 3]); → [1, 2]
// dropRight([1, 2, 3], 2); → [1]
// dropRight([1, 2, 3], 5); → []
// dropRight([1, 2, 3], 0); → [1, 2, 3]
function dropRight(array, n) {
  if(typeof n === "undefined") n = 1;
  n = array.length-n;
  if(n <= 0) return [];
  return array.slice(0,n);
}

//Creates a slice of array with n elements taken from the beginning. n defaults to 1
// take([1, 2, 3]); → [1]
// take([1, 2, 3], 2); → [1, 2]
// take([1, 2, 3], 5); → [1, 2, 3]
// take([1, 2, 3], 0); → []
function take(array, n) {
  if(typeof n === "undefined") n = 1;
  return array.slice(0,n);
}

// Iterates over elements of array invoking callback for each element.
// Callback(element/value, index/key, collection)
// forEach(['a','b','c'], function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }); → prints a,1,[1,2,3] b,2,[1,2,3] c,3,[1,2,3]
function forEach(array, callback) {
  for(var i=0,l=array.length;i<l;i++){
    callback(array[i],i,array);
  }
}

// Iterates over elements of array in reverse invoking callback for each element.
// Callback(element/value, index/key, collection)
// forEach(['a','b','c'], function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }); → prints c,3,[1,2,3] b,2,[1,2,3] a,1,[1,2,3]
function forEachRight(array, callback) {
  for(var i=array.length-1;i>-1;i--){
    callback(array[i],i,array);
  }
}

// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
function map(array, callback) {
  var ret = [];
  for(var i=0,l=array.length;i<l;i++){
    ret[i] = callback(array[i],i,array);
  }
  return ret;
}

// Iterates over elements of collection, returning an array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback) {
  var ret = [];
  for(var i=0,l=collection.length;i<l;i++){
    if(callback(collection[i],i,collection)){
      ret.push(collection[i]);
    }
  }
  return ret;
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
  var ret = [];
  for(var i=0,l=collection.length;i<l;i++){
    if(callback(collection[i],i,collection)) continue;
    ret.push(collection[i]);
  }
  return ret;
}

// Creates a duplicate-value-free version of an array
// uniq([1,2,1]); → [1,2]
function uniq(array) {
  var u = {};
  var ret = [];
  for(var i=0,l=array.length;i<l;i++){
    if(u[array[i]]) continue;
    u[array[i]] = true;
    ret.push(array[i]);
  }
  return ret;
}

// Gets the value of key from all elements in collection.
// pluck([{user: 'Bob', age: 20},{user: 'Sam', age: 25}], 'user'); → ['Bob','Sam']
function pluck(collection, key) {
  var ret = [];
  for(var i=0,l=collection.length;i<l;i++){
    ret[i] = collection[i][key];
  }
  return ret;
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
  var ret;
  var i = 0;
  if(typeof start === "undefined"){
    ret = collection[i];
    i++;
  }else{
    ret = start;
  }
  var keys = Object.keys(collection);
  var key;
  for(var l=keys.length;i<l;i++){
    key = keys[i];
    ret = callback(ret,collection[key],key);
  }
  return ret;
}

// This method is like reduce except that it iterates over elements of collection from right to left.
// reduceRight([1,2], function(sum,n) {
//  return difference - n;
// }); → 1
function reduceRight(collection, callback, start) {
  var ret;
  var keys = Object.keys(collection);
  var i = keys.length-1;
  if(typeof start === "undefined"){
    ret = collection[i];
    i--;
  }else{
    ret = start;
  }
  var key;
  for(i;i>-1;i--){
    key = keys[i];
    ret = callback(ret,collection[key],key);
  }
  return ret;
}

// Flattens a nested array.
// flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
function flatten(array) {
  var ret = [];
  var cur;
  for(var i=0,l=array.length;i<l;i++){
    cur = array[i];
    if(Array.isArray(cur)){
      ret = ret.concat(cur);
    }else{
      ret.push(cur);
    }
  }
  return ret;
}

// Recursively flattens a nested array.
// flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
function flattenDeep(array) {
  var ret = [];
  var l = array.length;
  for(var i=0;i<l;i++){
    var cur = array[i];
    if(Array.isArray(cur)){
      ret = ret.concat(flattenDeep(cur));
    }else{
      ret.push(cur);
    }
  }
  return ret;
}

// Assigns own enumerable properties of source object(s) to the destination object. Subsequent sources overwrite property assignments of previous sources.
// extend({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' }); → { 'user': 'fred', 'age': 40 }
function extend(object) {
  var exes = Array.prototype.slice.call(arguments,1);
  exes.forEach(function(ex){
    Object.keys(ex).forEach(function(k){
      if(!(k in object)){
        object[k] = ex[k];
        return;
      }
      if(typeof ex[k] !== "object" || typeof object[k] !== "object"){
        object[k] = ex[k];
        return;
      }
      extend(object[k],ex[k]);
    });
  });
  return object;
}

// Returns boolean of whether argument is classified as a String object
// isString('hi'); → true
// isString(5); → false
function isString(value) {
  return typeof value == "string";
}

// Creates a deep clone of value.
// var users = [{ 'user': 'barney' },{ 'user': 'fred' }];
// var deepClone = cloneDeep(users)
// deepClone[0].user === users[0].user → true
// deepClone === users → false
function cloneDeep(value) {
  var ret = {};
  Object.keys(value).forEach(function(k){
    console.log(typeof value[k]);
    if(typeof value[k] === "object"){
      ret[k] = cloneDeep(value[k]);
    }else{
      ret[k] = value[k];
    }
  });
  return ret;
}

// Returns a function that is restricted to invoking func once. Repeat calls to the function return the value of the first call.
function once(func) {
  var val;
  var ran = false;
  return function(){
    if(ran) return val;
    val = func.apply(this,arguments);
    ran = true;
    return val;
  };
}

// Returns a function that when called, will check if it has already computed the result for the given argument and return that value instead if possible.
function memoize(func) {
  var args = [];
  var vals = [];
  return function(arg){
    var i = args.indexOf(arg);
    if(i > -1) return vals[i];
    args.push(arg);
    i = func.call(this,arg);
    vals.push(i);
    return i;
  };
}

// Invokes func after wait milliseconds. Any additional arguments are provided to func when it is invoked.
function delay(func, wait) {
  var args = Array.prototype.slice.call(arguments,2);
  return setTimeout(function(){
    func.apply(func,args);
  },wait);
}

// Returns a function that only invokes func at most once per every wait milliseconds.
// If the function is invoked before the specified wait, return the original result
function throttle(func, wait) {
  var lastrun = 0;
  var res;
  return function(){
    var now = Date.now();
    if(now-lastrun < wait){
      return res;
    }
    lastrun = now;
    res = func.apply(this,arguments);
    return res;
  };
}
