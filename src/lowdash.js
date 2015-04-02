var _ = {};

// Returns the first argument provided to it
_.identity = function(value) {

}

// Returns boolean of whether argument is classified as a Number object
// _.isNumber(5); → true
// _.isNumber('hi'); → false
_.isNumber = function(value) {

}

// Returns boolean of whether argument is classified as a String object
// _.isString('hi'); → true
// _.isString(5); → false
_.isString = function(value) {

}

// Returns boolean of whether argument is classified as an Array object
// _.isArray(5); → false
// _.isNumber([1,2,3]); → true
_.isArray = function(value) {

}

// Return the size of collection by returning its length for array-like values or the number of own enumerable properties for objects.
// _.size([1,2,3]); → 3
// _.size({a: 1, b: 2}); → 2
_.size = function(collection) {

}

//Array

// Returns the first element of an array.
// Returns undefined if array is empty
// _.first([1,2,3]); → 1
// _.first([]); → undefined
_.first = function(array) {

}

// Returns the last element of an array
// _.last([1,2,3]); → 3
// _.last([]); → undefined
_.last = function(array) {

}

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// _.indexOf([11,22,33], 11); → 1
// _.indexOf([11,22,33], 5); → -1
_.indexOf = function(array, value) {

}

// Creates a slice of array with n elements dropped from the beginning. n defaults to 1
// _.drop([1, 2, 3]); → [2, 3]
// _.drop([1, 2, 3], 2); → [3]
// _.drop([1, 2, 3], 5); → []
// _.drop([1, 2, 3], 0); → [1, 2, 3]
_.drop = function(array, n) {

}

// Creates a slice of array with n elements dropped from the end. n defaults to 1
// _.dropRight([1, 2, 3]); → [1, 2]
// _.dropRight([1, 2, 3], 2); → [1]
// _.dropRight([1, 2, 3], 5); → []
// _.dropRight([1, 2, 3], 0); → [1, 2, 3]
_.dropRight = function(array, n) {

}

//Creates a slice of array with n elements taken from the beginning.
// _.take([1, 2, 3]); → [1]
// _.take([1, 2, 3], 2); → [1, 2]
// _.take([1, 2, 3], 5); → [1, 2, 3]
// _.take([1, 2, 3], 0); → []
_.take = function(array, n) {

}

// Iterates over elements of collection invoking callback for each element.
// Callback(element/value, index/key, collection)
// _.forEach(['a','b','c'], function(element, index, collection) {
//  console.log(element +"," +index +"," +collection);
// }); → prints a,1,[1,2,3] b,2,[1,2,3] c,3,[1,2,3]
_.forEach = function(collection, callback) {

}

// Iterates over elements of collection in reverse invoking callback for each element.
// Callback(element/value, index/key, collection)
// _.forEach(['a','b','c'], function(element, index, collection) {
//  console.log(element +"," +index);
// }); → prints c,3,[1,2,3] b,2,[1,2,3] a,1,[1,2,3]
_.forEachRight = function(colllection, callback) {

}

// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, collection)
// _.map([1,2,3], function(element, index, collection) {
//  return element * 3;
// }); -> [3,6,9]
_.map = function(collection, callback) {

}

// Iterates over elements of collection, returning an array of all elements callback returns truthy for.
// _.filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// _.filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
_.filter = function(collection, callback) {

}

// Removes all elements from array that callback returns truthy for and returns an array of the removed elements.
// _.remove([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [1,3]
// _.remove({a:1, b:2, c:3, d:4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [2,4]
// Challenge: use _.filter
_.reject = function(collection, callback) {

}

// Creates a duplicate-value-free version of an array
// _.uniq([1,2,1]); → [1,2]
_.uniq = function(array) {

}

// Gets the value of key from all elements in collection.
// _.pluck([{user: 'Bob', age: 20},{user: 'Sam', age: 25}], 'user'); → ['Bob','Sam']
_.pluck = function(collection, key) {

}

// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// _.reduce([1,2], function(sum,n) {
//  return sum + n;
// }); → 3
// _.reduce({a:1, b:2}, function(result, n, key) {
//  result[key] = n*3;
//  return result;
// }, {}); → {a:3, b:6}
_.reduce = function(collection, callback, start) {

}

// This method is like _.reduce except that it iterates over elements of collection from right to left.
// _.reduceRight([1,2], function(sum,n) {
//  return difference - n;
// }); → 1
_.reduceRight = function(collection, callback, start) {

}

// Flattens a nested array.
// _.flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
_.flatten = function(array) {

}

// Recursively flattens a nested array.
// _.flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
_.flattenDeep = function(array) {

}

// Assigns own enumerable properties of source object(s) to the destination object. Subsequent sources overwrite property assignments of previous sources.
// _.extend({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' }); → { 'user': 'fred', 'age': 40 }
_.extend = function(object) {

}

// Creates a clone of value.
// var users = [{ 'user': 'barney' },{ 'user': 'fred' }];
// var shallowClone = _.clone(users);
// shallowClone[0].user === users[0].user → true
// shallowClone === users → true
_.clone = function(value) {

}

// Creates a deep clone of value.
// var users = [{ 'user': 'barney' },{ 'user': 'fred' }];
// var deepClone = _.cloneDeep(users)
// deepClone[0].user === users[0].user → false
// deepClone === users → true
_.cloneDeep = function(value) {

}

// Creates a function that is restricted to invoking func once. Repeat calls to the function return the value of the first call.
_.once = function(func) {

}

// Creates a function that when called, will check if it has already computed the result for the given argument and return that value instead if possible.
_.memoize = function(func) {

}

// Invokes func after wait milliseconds. Any additional arguments are provided to func when it is invoked.
_.delay = function(func, wait) {

}

// Creates a function that only invokes func at most once per every wait milliseconds.
_.throttle = function(func, wait) {

}
