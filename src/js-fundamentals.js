// Returns the first argument provided to it
function identity(value) {
	console.log(value);
	return value;
}

// Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false
function isNumber(value) {
	
}

// Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isArray([1,2,3]); → true
function isArray(value) {
	
}

function isObject(value) {
	var toClass = {}.toString;

	var result = toClass.call(value);
	return result; // obviously will check type
}


// Creates a clone of an object.
// var users = [{ 'user': 'barney' },{ 'user': 'fred' }];
// var shallowClone = clone(users);
// shallowClone[0] === users[0] → true
function clone(value) {

}

// Return the size of collection. If the argument passed is an array, then return the length of the array. If the argument passed is an object, then return the number of key/value properties.
// size([1,2,3]); → 3
// size({a: 1, b: 2}); → 2
function size(collection) {

}

// Returns the first element of an array without modifying the original array.
// Returns undefined if array is empty
// first([1,2,3]); → 1
// first([]); → undefined
function first(array) {

}

// Returns the last element of an array without modifying the origin array
// last([1,2,3]); → 3
// last([]); → undefined
function last(array) {

}

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {

}

// Creates a slice of array with n elements dropped from the beginning. n defaults to 1
// drop([1, 2, 3]); → [2, 3]
// drop([1, 2, 3], 2); → [3]
// drop([1, 2, 3], 5); → []
// drop([1, 2, 3], 0); → [1, 2, 3]
function drop(array, n) {

}

// Creates a slice of array with n elements dropped from the end. n defaults to 1
// dropRight([1, 2, 3]); → [1, 2]
// dropRight([1, 2, 3], 2); → [1]
// dropRight([1, 2, 3], 5); → []
// dropRight([1, 2, 3], 0); → [1, 2, 3]
function dropRight(array, n) {

}

//Creates a slice of array with n elements taken from the beginning. n defaults to 1
// take([1, 2, 3]); → [1]
// take([1, 2, 3], 2); → [1, 2]
// take([1, 2, 3], 5); → [1, 2, 3]
// take([1, 2, 3], 0); → []
function take(array, n) {

}

/*
	The following brief introduction to callbacks is necessary to understand the rest of this fundamentals unit! 
*/


/*
	INTRODUCING CALLBACKS

	Callbacks are the most important topic to understand if you want to understand how to use node.

	Nearly everything in node uses callbacks. They were not invented by node, they are just part of the Javascript language

	Callbacks are functions that are executed asynchronously, or at a later time.  Instead of the code reading top to bottom, procedurally, async programs may execute different functions at different times based on the order and speed that earlier functions (like http requests) or file system reads happen

*/


// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// var callback = function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,[1,2,3] b,1,[1,2,3] c,2,[1,2,3]
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
function forEach(array, callback) {

	for (var i = 0; i < array.length; i++) {
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

}

// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
function map(array, callback) {

	if (isObject(array) === '[object Array]') {
		var values = [];
		// for (var i = 0; i < array.length; i++) {
		// 	values.push(callback(array[i]));
		// }
		forEach(array, function(element){
			values.push(callback(element))
		});
	}

	return values;

}

// Iterates over elements of collection, returning an array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback) {

	var container = [];

	forEach(collection, function(item){
		if (callback(item) == true) {
			container.push(item);
		}
	});

	return container;
}


// function filter(collection, callback, booleanValue) {

// 	var container = [];

// 	forEach(collection, function(item){
// 		if (callback(item) == booleanValue) {
// 			container.push(item);
// 		}
// 	});

// 	return container;
// }

// Removes all elements from array that callback returns truthy for and returns an array of the removed elements.
// reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// reject({a:1, b:2, c:3, d:4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [2,4]
// Challenge: use filter
// example array
// var exampleArray = [1,2,3,4,5,6,7,8,9,10];

// function evenOrOdd (x) {
// 	return (x%2 === 0);
// }

/*
the splice function in javascript mutates the original array





*/


function reject(collection, callback) {
 //define a container array
   var container = [];
   forEach(collection, function(element,index,collection){
   	if(callback(element) === true){
   		container.push(collection.splice(index, 1)[0]);
	}
   });

   // var newContainer = [];
   // for (var i = 0; i < container.length; i++) {
   // 		newContainer.push(container[i][0]);
   // }
   return container;
   // return newContainer;

 //callback returns a boolean

 //for values in collection where callback returns true,

 //splice true returns out of collection

 //push splice items to a container array
}

//reject(exampleArray,trueIfEven)
// => [2,4,6,8,10]
// exampleArray => [1,3,5,7,9]


// Creates an array without duplicate values. The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
var uniqueArray = [1,2,5,3,3,5,7,8];

function uniq(array) {

	for (var i = 0; i < array.length; i++) {
		if (array[i] === array[i+1]) {
			array.splice(i+1, 1);
		}
	}

	return array;

}


function uniq(array) {

	for (var i = 0; i < array.length; i++) {
		for (var j = i+1; j < array.length; j++) {
			if (array[i] === array[j]) {
				array.splice(i, 1);
			}
		}
	}

	return array;
}

function uniq(array) {

		for (var i = 0; i < array.length; i++) {
			if (array[i] === array[i+1]) {
				console.log("he");
			}
		}

	// return array;
}

// Gets the value of key from all elements in collection.
// pluck([{user: 'Bob', age: 20},{user: 'Sam', age: 25}], 'user'); → ['Bob','Sam']
function pluck(collection, key) {

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

}

// This method is like reduce except that it iterates over elements of collection from right to left.
// reduceRight([1,2], function(sum,n) {
//  return difference - n;
// }); → 1
function reduceRight(collection, callback, start) {

}

// Flattens a nested array.
// flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
function flatten(array) {

}

// Recursively flattens a nested array.
// flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
function flattenDeep(array) {

}

// Assigns own enumerable properties of source object(s) to the destination object. Subsequent sources overwrite property assignments of previous sources.
// extend({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' }); → { 'user': 'fred', 'age': 40 }
function extend(object) {

}

// Returns boolean of whether argument is classified as a String object
// isString('hi'); → true
// isString(5); → false
function isString(value) {

}

// Creates a deep clone of value.
// var users = [{ 'user': 'barney' },{ 'user': 'fred' }];
// var deepClone = cloneDeep(users)
// deepClone[0].user === users[0].user → true
// deepClone === users → false
function cloneDeep(value) {

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

}

// Returns a function that is restricted to invoking func once. Repeat calls to the function return the value of the first call.
function once(func) {

}

// Returns a function that when called, will check if it has already computed the result for the given argument and return that value instead if possible.
function memoize(func) {

}

// Invokes func after wait milliseconds. Any additional arguments are provided to func when it is invoked.
function delay(func, wait) {

}

// Returns a function that only invokes func at most once per every wait milliseconds.
function throttle(func, wait) {

}

function reverseString(testString) {
	// get length of testString
	var container = [];

	for (var i = testString.length-1; i >= 0; i--) {
		container.push(testString[i]);
	}

	return container.join("");
}