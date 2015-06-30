// Returns the first argument provided to it
function identity(value) {
	return value;
}

// Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false
function isNumber(value) {
	if(typeof(value) == "number")
	{
		return true;
	}
	else
	{
		return false;
	}

	// return typeof(value) == "number";

}

// Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isArray([1,2,3]); → true
function isArray(value) {
	if(typeof(value) == "object" && typeof(value.length) !== "undefined"){
		return true;
	}
	else{
		return false;
	}

	// return Array.isArray(value);
	// return value.constructor === Array;

}

// Returns boolean of whether argument is classified as an Object
// isObject(5); → false
// isObject([1,2,3]); → true
function isObject(value) {
	if(typeof(value) == "object" && value.length !== 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}

// Creates a clone of an object.
// var users = [{ 'user': 'barney' },{ 'user': 'fred' }];
// var shallowClone = clone(users);
// shallowClone[0] === users[0] → true
function clone(value) {
	return value;
}

// Return the size of collection. If the argument passed is an array, then return the length of the array. If the argument passed is an object, then return the number of key/value properties.
// size([1,2,3]); → 3
// size({a: 1, b: 2}); → 2
function size(collection) {
		var counter = 0;
		for(key in collection)
		{
			counter++;
		}
		return counter;
}

// Returns the first element of an array without modifying the original array.
// Returns undefined if array is empty
// first([1,2,3]); → 1
// first([]); → undefined
function first(array) {
	// if (array.length == 0){
	// 	return undefined;
	// }
	// else {
		return array[0];
	// }
}

// Returns the last element of an array without modifying the origin array
// last([1,2,3]); → 3
// last([]); → undefined
function last(array) {
	// if(array.length == 0)
	// {
	// 	return undefined;
	// }
	// else
	// {
		return array[array.length-1];
	// }
}

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {
	// return array.indexOf(value);
	for(var i = 0; i < array.length; i++)
	{
		if(array[i] === value)
		{
			return i;
		}
	}
	return -1;
}

// Creates a slice of array with n elements dropped from the beginning. n defaults to 1
// drop([1, 2, 3]); → [2, 3]
// drop([1, 2, 3], 2); → [3]
// drop([1, 2, 3], 5); → []
// drop([1, 2, 3], 0); → [1, 2, 3]
function drop(array, n) {
	if(n == undefined)
	{
		n = 1;
	}
	array.splice(0,n);
	return array;
}

// Creates a slice of array with n elements dropped from the end. n defaults to 1
// dropRight([1, 2, 3]); → [1, 2]
// dropRight([1, 2, 3], 2); → [1]
// dropRight([1, 2, 3], 5); → []
// dropRight([1, 2, 3], 0); → [1, 2, 3]
function dropRight(array, n) {
	if (n == undefined){
		n = 1;
	}
	if (n > array.length){
		return [];
	}
	array.splice(array.length-n, n);
	return array;
}

//Creates a slice of array with n elements taken from the beginning. n defaults to 1
// take([1, 2, 3]); → [1]
// take([1, 2, 3], 2); → [1, 2]
// take([1, 2, 3], 5); → [1, 2, 3]
// take([1, 2, 3], 0); → []
function take(array, n) {
	if (n == undefined){
		n = 1;
	}
	return array.slice(0,n);
}

// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// var callback = function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,[1,2,3] b,1,[1,2,3] c,2,[1,2,3]
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
function forEach(array, callback) {
	for (var i = 0; i<array.length; i++){
		callback(array[i], i, array);
	}
}

// Iterates over elements of array in reverse invoking callback for each element.
// Callback(element/value, index/key, collection)
// var callback = function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints c,2,[1,2,3] b,1,[1,2,3] a,0,[1,2,3]
function forEachRight(array, callback) {
	for(var i = array.length-1; i >= 0; i--)
	{
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
	for (var i = 0; i<array.length; i++){
		array[i] = callback(array[i], i, array);
	}
	return array;
}

// Iterates over elements of collection, returning an array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback) {
	var answer = [];
	for(key in collection)
	{
		if(callback(collection[key],key,collection))
		{
			answer.push(collection[key]);
		}
	}
	return answer;
}

// Removes all elements from array that callback returns truthy for and returns an array of the removed elements.
// reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [1,3]
// reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
//  return element % 2 !== 0;
// }); → {b:2, d:4}
// Challenge: use filter
function reject(collection, callback) {
	for(key in collection)
	{
		if(callback(collection[key],key,collection))
		{
			if (collection.length !== undefined){
				collection.splice(key, 1);
			}
			else {
				delete collection[key];
			}
		}
	}
	return collection;
}


// Creates an array without duplicate values. The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
function uniq(array) {
	var answer = [];
	for(var i = 0; i < array.length; i++)
	{
		if(answer.indexOf(array[i]) === -1)
		{
			answer.push(array[i]);
		}
	}
	return answer;

	// creating an empty object and saving values to it would be more time efficient
}

// Gets the value of key from all elements in collection.
// pluck([{user: 'Bob', age: 20},{user: 'Sam', age: 25}], 'user'); → ['Bob','Sam']
//<<<<<<< HEAD
function pluck(collection, key) {
	var answer = [];
	for (index in collection){
		answer.push(collection[index][key]);
	}
	return answer;
}
//=======
// function pluck(array, key) {

// ///>>>>>>> 27d736f94cf7afc6512288cbe7021b47d9bf095d
// }

//COME BACK
//_------------------------

// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
//<<<<<< HEAD
// reduce({a:1, b:2}, function(result, n, key) {
//  result[key] = n*3;
//  return result;
// }, {}); → {a:3, b:6}
function reduce(collection, callback, start) {
	if(start === undefined)
	{
		start = collection[0];
		for(var i = 1; i < collection.length; i++)
		{
			start = callback(start,collection[i]);
		}
		return start;
	}
	var answer = start;
	for(var i = 0; i < collection.length; i++)
	{
		answer = callback(answer,collection[i]);
	}
	return answer;
}

// This method is like reduce except that it iterates over elements of collection from right to left.
// reduceRight([1,2], function(sum,n) {
//  return difference - n;
// }); → 1
function reduceRight(collection, callback, start) {
	if(start == undefined)
	{
		start = collection[collection.length-1];
		for (var i = collection.length-2; i >= 0; i--){
			start = callback(start, collection[i]);
		}
		return start;
	}
	var answer = start;
	for(var i = collection.length-1; i >= 0; i--)
	{
		answer = callback(answer, collection[i]);
	}
	return answer;
}
//=======
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
//function reduce(array, callback, start) {
//>>>>>>> 27d736f94cf7afc6512288cbe7021b47d9bf095d

//}

// Flattens a nested array.
// flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
function flatten(array) {
	var answer = [];
	for(var i = 0; i < array.length; i++)
	{
		if(isArray(array[i]))
		{
			for(var j = 0; j < array[i].length; j++)
			{
				answer.push(array[i][j]);
			}
		}
		else
		{
			answer.push(array[i]);
		}
	}
	return answer;
}

// Recursively flattens a nested array.
// flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
function flattenDeep(array) {
	var ans = [];
	for (var i =0; i<array.length; i++){
		if (isArray(array[i])){
			ans = ans.concat(flattenDeep(array[i]));
		}
		else
		{
			ans.push(array[i]);
		}
	}
	return ans;
}

// Assigns own enumerable properties of source object(s) to the destination object. Subsequent sources overwrite property assignments of previous sources.
// extend({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' }); → { 'user': 'fred', 'age': 40 }
//<<<<<<< HEAD
//function extend() {
	// return arguments.reduce(function(previousValue, currentValue, index, array){
	// 	for (key in currentValue){
	// 		initialValue[key] = currentValue[key];
	// 	}
	// 	return initialValue;
	// });


//=======
// BONUS: solve with reduce
function extend() {
//>>>>>>> 27d736f94cf7afc6512288cbe7021b47d9bf095d

	for (var i =1; i<arguments.length; i++){
		for (key in arguments[i]){
			arguments[0][key] = arguments[i][key];
		}
	}
	return arguments[0];
}

// Returns boolean of whether argument is classified as a String object
// isString('hi'); → true
// isString(5); → false
function isString(value) {
	if (typeof(value) === "string"){
		return true;
	}
	else{
		return false;
	}
}

// Creates a deep clone of value.
// var users = [{ 'user': 'barney' },{ 'user': 'fred' }];
// var deepClone = cloneDeep(users)
// deepClone[0].user === users[0].user → true
// deepClone === users → false
function cloneDeep(value) {
	var arr = [];
	for (var i =0; i<value.length; i++){
		arr.push(value[i]);
	}
	return arr;
}

// Using a for loop, call the functions in the queue in order with the input number, where the results of each function become the next function’s input. Additionally, the queue should be empty after the function is called.
/* var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4;},
  function(a) { return a % 5;}
];
var start = 2;
applyAndEmpty(2, puzzlers); → 3
*/
function applyAndEmpty(input, queue) {
	while (queue.length > 0){
		input = queue.shift()(input);
	}
	return input;
}

// Returns a function that is restricted to invoking func once. Repeat calls to the function return the value of the first call.
function once(func) {
	return function () {
		if (func){
			var ret = func();
			func = null;
		}
		return ret;
	};
}

// Returns a function that when called, will check if it has already computed the result for the given argument and return that value instead if possible.
function memoize(func) {
	var map = {};
	return function(param) {
		if(!map[param])
		{
			map[param] = func(param);
		}
		return map[param];
	}
}

// Invokes func after wait milliseconds. Any additional arguments are provided to func when it is invoked.
function delay(func, wait) {
	console.log("arguments",arguments[2]);
	var args = Array.prototype.slice.call(arguments, 2);
	console.log("args", args);
	return setTimeout(function(){
		console.log("this",this);
		return func.apply(this,args);
	}, wait);
}

// Returns a function that only invokes func at most once per every wait milliseconds.
function throttle(func, wait) {
	return function(){
		var once = true;
		
		
	}; 
}

// Creates an array of elements, sorted in ascending order by the results of running each element in a collection through iteratee. 
/*
sortBy([1, 2, 3], function(n) {
  return Math.sin(n);
}); → [3, 1, 2]

sortBy([1, 2, 3], function(n) {
  return this.sin(n);
}, Math); → [3, 1, 2]

var users = [
  { 'user': 'fred' },
  { 'user': 'pebbles' },
  { 'user': 'barney' }
];

pluck(_.sortBy(users, 'user'), 'user'); → ['barney', 'fred', 'pebbles']
 */
 // [1,7, 123]
 //[1,6,7]
 //[1,123,7]
function sortBy(array, iterator) {
	var arr =[];
	for(var i = 0; i < array.length; i++)
	{
		array[i] = iterator(array[i]);
	}
	arr = array.sort();
	return arr;
}

// Receives a variable number of arrays, and returns an array that contains every item shared between all passed-in arrays
function intersection() {

}

// Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
// zip(['fred', 'barney'], [30, 40], [true, false]); → [['fred', 30, true], ['barney', 40, false]]
function zip() {

}