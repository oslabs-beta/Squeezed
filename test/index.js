describe('isNegativeOrOdd', function() {
  it('should return true if number is odd', function() {
    expect(isNegativeOrOdd(1)).to.eql(true);
    expect(isNegativeOrOdd(3)).to.eql(true);
    expect(isNegativeOrOdd(5)).to.eql(true);
  });

  it('should return true if number is negative', function() {
    expect(isNegativeOrOdd(-1)).to.eql(true);
    expect(isNegativeOrOdd(-2)).to.eql(true);
    expect(isNegativeOrOdd(-3)).to.eql(true);
  });

  it('should return false if number is even', function() {
    expect(isNegativeOrOdd(0)).to.eql(false);
    expect(isNegativeOrOdd(2)).to.eql(false);
    expect(isNegativeOrOdd(4)).to.eql(false);
  });
});

describe('repeat', function() {
  it('should repeat inputted string count times', function() {
    expect(repeat('abc',3)).to.eql('abcabcabc');
    expect(repeat('***',2)).to.eql('******');
  });
});

describe('reverseString', function() {
  it('should reverse a string', function() {
    expect(reverseString('')).to.eql('');
    expect(reverseString('abc')).to.eql('cba');
    expect(reverseString('abcd')).to.eql('dcba');
  });
});



describe('reverseObject', function() {
  it('should reverse object', function() {
    expect(reverseObject({a:'b'})).to.eql({b:'a'});
    expect(reverseObject({a:1})).to.eql({'1':'a'});
  });

  it('should reverse multiple properties', function() {
    expect(reverseObject({a:1,b:2})).to.eql({'1':'a','2':'b'});
    expect(reverseObject({a:1,b:2,c:3})).to.eql({'1':'a','2':'b','3':'c'});
  });
});


describe('isNumber', function() {
  it('should return true for numbers', function() {
    expect(isNumber(0)).to.be(true);
    expect(isNumber(-1)).to.be(true);
    expect(isNumber(1)).to.be(true);
  });

  it('should return false for everything', function() {
    expect(isNumber({})).to.be(false);
    expect(isNumber([])).to.be(false);
    expect(isNumber('a')).to.be(false);
    expect(isNumber(true)).to.be(false);
  });
});

describe('isArray', function() {
  it('should return true for array', function() {
    expect(isArray([])).to.be(true);
    expect(isArray([1])).to.be(true);
  });

  it('should return false for everything', function() {
    expect(isArray({})).to.be(false);
    expect(isArray('a')).to.be(false);
    expect(isArray(1)).to.be(false);
    expect(isArray(true)).to.be(false);
  });
});

describe('isObject', function() {
  it('should return true for object', function() {
    expect(isObject({})).to.be(true);
    expect(isObject({a:1})).to.be(true);
    expect(isObject([])).to.be(true);
  });

  it('should return false for everything', function() {
    expect(isObject('a')).to.be(false);
    expect(isObject(1)).to.be(false);
    expect(isObject(true)).to.be(false);
  });
});

describe('isNull', function() {
  it('should return true for null', function() {
    expect(isNull(null)).to.be(true);
  });

  it('should return false for everything', function() {
    expect(isNull(5)).to.eql(false);
    expect(isNull('string')).to.eql(false);
    expect(isNull({})).to.eql(false);
    expect(isNull([])).to.eql(false);
    expect(isNull(undefined)).to.eql(false);
    expect(isNull(true)).to.eql(false);
    expect(isNull(false)).to.eql(false);
  });

});

describe('clone', function() {
  it('should return shallow copy of array', function() {
    var users = [{ 'user': 'barney' },{ 'user': 'fred' }];
    var shallowClone = clone(users);
    expect(shallowClone).to.not.equal(users);
    expect(shallowClone[0].user).to.equal(users[0].user);
    expect(shallowClone[0]).to.equal(users[0]);
  });

  it('should return shallow copy of an object', function() {
    var users = {a: {b:1}, c: {d: 2}};
    var shallowClone = clone(users);
    expect(users).to.not.equal(shallowClone);
    expect(users.a).to.eql(shallowClone.a);
    expect(users.c).to.eql(shallowClone.c);
  });
});

describe('size', function() {
  it('should return the correct size of arrays', function() {
    expect(size([])).to.eql(0);
    expect(size([1])).to.eql(1);
  });
  it('should return the correct size of objects', function() {
    expect(size({a:1,b:2})).to.eql(2);
    expect(size({})).to.eql(0);
    expect(size({a:1,b:2,length:1})).to.eql(3);
  });
});

describe('indexOf', function() {
  it('should have 40 in the list', function() {
    var numbers = [10, 20, 30, 40, 50];
    expect(indexOf(numbers, 40)).to.be(3);
  });

  it('should be able to compute indexOf even when the native function is undefined', function() {
    var numbers = [10, 20, 30];
    expect(indexOf(numbers, 20)).to.be(1);
  });

  it('returns -1 when the target cannot be found not in the list', function() {
    var numbers = [10, 20, 30, 40, 50];
    expect(indexOf(numbers, 35)).to.be(-1);
  });

  it('returns the first index that the target can be found at when there are multiple matches', function() {
    var numbers = [1, 40, 40, 40, 40, 40, 40, 40, 50, 60, 70];
    expect(indexOf(numbers, 40)).to.be(1);
  });
});

describe('drop', function() {
  it('should remove first element if second argument not provided', function() {
    var numbers = [1, 2, 3];
    expect(drop(numbers)).to.eql([2, 3]);
    expect(numbers).to.eql([1,2,3]);
  });

  it('should remove first n elem', function() {
    var numbers = [1, 2, 3];
    expect(drop(numbers, 2)).to.eql([3]);
    expect(numbers).to.eql([1,2,3]);
  });

  it('should return empty array if n is larger than array length', function() {
    var numbers = [1, 2, 3];
    expect(drop(numbers, 5)).to.eql([]);
    expect(numbers).to.eql([1,2,3]);
  });

  it('should return entire array if n is 0', function() {
    var numbers = [1, 2, 3];
    expect(drop(numbers, 0)).to.eql([1, 2, 3]);
    expect(numbers).to.eql([1,2,3]);
  });
});

describe('dropRight', function() {
  it('should remove last element if second argument not provided', function() {
    var numbers = [1, 2, 3];
    expect(dropRight(numbers)).to.eql([1, 2]);
    expect(numbers).to.eql([1,2,3]);
  });

  it('should remove last n elem', function() {
    var numbers = [1, 2, 3];
    expect(dropRight(numbers, 2)).to.eql([1]);
    expect(numbers).to.eql([1,2,3]);
  });

  it('should return empty array if n is larger than array length', function() {
    var numbers = [1, 2, 3];
    expect(dropRight(numbers, 5)).to.eql([]);
    expect(numbers).to.eql([1,2,3]);
  });

  it('should return entire array if n is 0', function() {
    var numbers = [1, 2, 3];
    expect(dropRight(numbers, 0)).to.eql([1, 2, 3]);
    expect(numbers).to.eql([1,2,3]);
  });
});

describe('take', function() {
  it('should return first element if second argument not provided', function() {
    var numbers = [1, 2, 3];
    expect(take(numbers)).to.eql([1]);
    expect(numbers).to.eql([1,2,3]);
  });

  it('should return first n elem', function() {
    var numbers = [1, 2, 3];
    expect(take(numbers, 2)).to.eql([1,2]);
    expect(numbers).to.eql([1,2,3]);
  });

  it('should return entire array if n is larger than array length', function() {
    var numbers = [1, 2, 3];
    expect(take(numbers, 5)).to.eql([1,2,3]);
    expect(numbers).to.eql([1,2,3]);
  });

  it('should return empty array if n is 0', function() {
    var numbers = [1, 2, 3];
    expect(take(numbers, 0)).to.eql([]);
    expect(numbers).to.eql([1,2,3]);
  });
});

describe('difference', function() {
  it('should split return an array with the elements from the first array that are not present in the second array ', function() {
    expect(difference([0,1,2,3,4,5],[3,5])).to.eql([0,1,2,4]);
  });
});

describe('forEach', function() {
  it('should iterate over arrays, providing access to the element, index, and array itself', function() {
    var fruits = ['apple', 'banana', 'carrot'];
    var iterationInputs = [];
    forEach(fruits, function(fruit, index, list) {
      iterationInputs.push([fruit, index, list]);
    });
    expect(iterationInputs).to.eql([
      ['apple', 0, fruits],
      ['banana', 1, fruits],
      ['carrot', 2, fruits]
    ]);
  });

  it('should only iterate over the array elements, not properties of the array', function() {
    var fruits = ['apple', 'banana', 'carrot'];
    var iterationInputs = [];
    fruits.shouldBeIgnored = 'Ignore me!';
    forEach(fruits, function(fruit, index, list) {
      iterationInputs.push([fruit, index, list]);
    });
    expect(iterationInputs).to.eql([
      ['apple', 0, fruits],
      ['banana', 1, fruits],
      ['carrot', 2, fruits]
    ]);
  });
});

describe('forEachRight', function() {
  it('should iterate over arrays, providing access to the element, index, and array itself', function() {
    var fruits = ['apple', 'banana', 'carrot'];
    var iterationInputs = [];
    forEachRight(fruits, function(fruit, index, list) {
      iterationInputs.push([fruit, index, list]);
    });
    expect(iterationInputs).to.eql([
      ['apple', 0, fruits],
      ['banana', 1, fruits],
      ['carrot', 2, fruits]
    ].reverse());
  });

  it('should only iterate over the array elements, not properties of the array', function() {
    var fruits = ['apple', 'banana', 'carrot'];
    var iterationInputs = [];
    fruits.shouldBeIgnored = 'Ignore me!';
    forEachRight(fruits, function(fruit, index, list) {
      iterationInputs.push([fruit, index, list]);
    });
    expect(iterationInputs).to.eql([
      ['apple', 0, fruits],
      ['banana', 1, fruits],
      ['carrot', 2, fruits]
    ].reverse());
  });
});

describe('map', function() {
  it('should apply a function to every value in an array', function() {
    var doubled = map([1, 2, 3], function(num) {
      return num * 2;
    });
    expect(doubled).to.eql([2, 4, 6]);
  });
});

describe('filter', function() {
  it('should return all even numbers in an array', function() {
    var isEven = function(num) { return num % 2 === 0; };
    var evens = filter([1, 2, 3, 4, 5, 6], isEven);
    expect(evens).to.eql([2, 4, 6]);
  });

  it('should return all odd numbers in an array', function() {
    var isOdd = function(num) { return num % 2 !== 0; };
    var odds = filter([1, 2, 3, 4, 5, 6], isOdd);
    expect(odds).to.eql([1, 3, 5]);
  });

  it('should filter all odd values in object', function() {
    var obj = {a:1, b:2, c:3, d:4};
    var isOdd = function(value, key, collection) { return value % 2 !== 0; };
    var evens = reject(obj, isOdd);
    expect(evens).to.eql({b:2, d:4});
  });
});

describe('reject', function() {
  it('should reject all even numbers', function() {
    var isEven = function(num) { return num % 2 === 0; };
    var odds = reject([1, 2, 3, 4, 5, 6], isEven);
    expect(odds).to.eql([1, 3, 5]);
  });

  it('should reject all odd numbers', function() {
    var isOdd = function(num) { return num % 2 !== 0; };
    var evens = reject([1, 2, 3, 4, 5, 6], isOdd);
    expect(evens).to.eql([2, 4, 6]);
  });

  it('should reject all odd values in object', function() {
    var obj = {a:1, b:2, c:3, d:4};
    var isOdd = function(value, key, collection) { return value % 2 !== 0; };
    var evens = reject(obj, isOdd);
    expect(evens).to.eql({b:2, d:4});
  });
});

describe('uniq', function() {
  it('should return all unique values contained in an unsorted array', function() {
    var list = [1, 2, 1, 3, 1, 4];
    expect(uniq(list)).to.eql([1, 2, 3, 4]);
  });

  it('should handle iterators that work with a sorted array', function() {
    var iterator = function(value) { return value +1; };
    var list = [1, 2, 2, 3, 4, 4];
    expect(uniq(list, true, iterator)).to.eql([1, 2, 3, 4]);
  });
});

describe('pluck', function() {
  it('should return values contained at a user-defined property', function() {
    var people = [
      {name : 'moe', age : 30},
      {name : 'curly', age : 50}
    ];
    expect(pluck(people, 'name')).to.eql(['moe', 'curly']);
  });
});

describe('trim', function() {
  it('should remove leading white spaces', function() {
    expect(trim('hello')).to.eql('hello');
    expect(trim(' hello')).to.eql('hello');
    expect(trim('  hello')).to.eql('hello');
    expect(trim('   hello')).to.eql('hello');
  });

  it('should remove trailing white spaces', function() {
    expect(trim('hello')).to.eql('hello');
    expect(trim('hello ')).to.eql('hello');
    expect(trim('hello  ')).to.eql('hello');
    expect(trim('hello    ')).to.eql('hello');
  });

  it('should remove both', function() {
    expect(trim('  hello  ')).to.eql('hello');
  });
});

describe('reduce', function() {
  it('should sum up an array', function() {
    var add = function(tally, item) {return tally + item; };
    var total = reduce([1, 2, 3], add);
    expect(total).to.equal(6);
  });

  it('should find the difference in an array', function() {
    var difference = function(tally, item) {return tally - item; };
    var total = reduce([1, 2, 3], difference);
    expect(total).to.equal(-4);
  });

  it('should sum up an array when start provided', function() {
    var add = function(tally, item) {return tally + item; };
    var total = reduce([1, 2, 3], add, 2);
    expect(total).to.equal(8);
  });

  it('should find the difference in an array when start provided', function() {
    var difference = function(tally, item) {return tally - item; };
    var total = reduce([1, 2, 3], difference, -1);
    expect(total).to.equal(-7);
  });
});

describe('flatten', function() {
  it('should flatten nested arrays', function() {
    expect(flatten([1, [2, 3, [4]]])).to.eql([1, 2, 3, [4]]);
  });
});

describe('flattenDeep', function() {
  it('should flatten nested arrays recursively', function() {
    expect(flattenDeep([1, [2, 3, [4]]])).to.eql([1, 2, 3, 4]);
  });
});

describe('extend', function() {
  it('returns the first argument', function() {
    var to = {};
    var from = {};
    var extended = extend(to, from);
    expect(extended).to.equal(to);
  });

  it('should extend an object with the attributes of another', function() {
    var to = {};
    var from = {a:'b'};
    extend(to, from);
    expect(to.a).to.equal('b');
  });

  it('should override properties found on the destination', function() {
    var to = {a:'x'};
    var from = {a:'b'};
    extend(to, from)
    expect(to.a).to.equal('b');
  });

  it('should not override properties not found in the source', function() {
    var to = {x:'x'};
    var from = {a:'b'};
    extend(to, from);
    expect(to.x).to.equal('x');
  });

  it('should extend from multiple source objects', function() {
    var first = {x:1};
    extend(first, {a:2}, {b:3});
    expect(first).to.eql({x:1, a:2, b:3});
  });

  it('in the case of a conflict, it should use the last property\'s values when extending from multiple source objects', function() {
    var extended = extend({x:'x'}, {a:'a', x:2}, {a:1});
    expect(extended).to.eql({x:2, a:1});
  });

  it('should copy undefined values', function() {
    var extended = extend({}, {a: void 0, b: null});
    expect('a' in extended && 'b' in extended).to.be(true);
  });
});

describe('isString', function() {
  it('should return true for strings', function() {
    expect(isString('a')).to.be(true);
    expect(isString('5')).to.be(true); // congrats, you found the error
  });

  it('should return false for everything', function() {
    expect(isString({})).to.be(false);
    expect(isString([])).to.be(false);
    expect(isString(1)).to.be(false);
    expect(isString(true)).to.be(false);
  });
});

describe('cloneDeep', function() {
  it('should return deep copy of object', function() {
    // notice how andy is the only user with friends
    var users = [
      { 'user': 'barney' },
      { 'user': 'fred' },
      { 'user': 'andy', friends: { 'user': 'alex' } }
    ];
    var deepClone = cloneDeep(users);
    expect(deepClone[0].user).to.equal(users[0].user);
    expect(deepClone[0]).to.not.equal(users[0]);
    expect(deepClone).to.not.equal(users);
    expect(deepClone[0]).to.eql(users[0]);
    expect(deepClone).to.eql(users);
    expect(deepClone[2].friends).to.not.equal(users[2].friends);
  });
});

describe('applyAndEmpty', function() {
  it('should iterate over the queue and submit input', function() {
    var puzzlers = [
      function(a) { return 8 * a - 10; },
      function(a) { return (a - 3) * (a - 3) * (a - 3); },
      function(a) { return a * a + 4;},
      function(a) { return a % 5;}
    ];
    var start = 2;
    expect(applyAndEmpty(2, puzzlers)).to.equal(3);
  });
});

describe('once', function() {
  it('should only run a user-defined function if it hasn\'t been run before', function() {
    var num = 0;
    var increment = once(function() {
      num += 1;
    });
    increment();
    increment();
    expect(num).to.equal(1);
  });
});

describe('memoize', function() {
  var fib, fastFib, timeCheck, fastTime, wait, add, fastAdd;
  beforeEach(function() {
    fib = function(n) {
      if(n < 2){ return n; }
      return fib(n - 1) + fib(n - 2);
    };
    fastFib = memoize(fib);
    timeCheck = function(str) { return str + Date.now(); };
    fastTime = memoize(timeCheck);
    add = function(a, b, c) {
      return a + b + c;
    };
    fastAdd = memoize(add);
    // Synchronous sleep: terrible for web development, awesome for testing memoize
    wait = function(t) {
      var start = Date.now();
      while ((Date.now() - start) < t) 'wait';
    };
  });

  it('a memoized function should produce the same result when called with the same arguments', function() {
    expect(fib(10)).to.equal(55);
    expect(fastFib(10)).to.equal(55);
  });

  it('should give different results for different arguments', function() {
    expect(fib(10)).to.equal(55);
    expect(fastFib(10)).to.equal(55);
    expect(fastFib(7)).to.equal(13);
  });

  it('should not run the function twice for the same given argument', function() {
    var firstTime = timeCheck('shazaam!');
    wait(5);
    var secondTime = fastTime('shazaam!');
    wait(5);
    expect(firstTime).to.not.equal(secondTime);
    expect(fastTime('shazaam!')).to.equal(secondTime);
  });

  it('should accept multiple arguments', function() {
    expect(add(10, 5, 4)).to.equal(19);
    expect(fastAdd(10, 5, 4)).to.equal(19);
  });

  it('should work with objects as arguments', function() {
    var firstTime = timeCheck({ foo: 'bar' });
    wait(5);
    var secondTime = fastTime({ foo: 'bar' });
    wait(5);
    expect(firstTime).to.not.equal(secondTime);
    expect(fastTime({ foo: 'bar' })).to.equal(secondTime);
    expect(fastTime({ foo: 'bar' })).to.not.equal(fastTime({ different: 'result' }));
  });

  it('should work with arrays as arguments', function() {
    var firstTime = timeCheck(['foo', 'bar']);
    wait(5);
    var secondTime = fastTime(['foo', 'bar']);
    wait(5);
    expect(firstTime).to.not.equal(secondTime);
    expect(fastTime(['foo', 'bar'])).to.equal(secondTime);
    expect(fastTime(['foo', 'bar'])).to.not.equal(fastTime(['different', 'results']));
  });
});

describe('delay', function() {
  it('should only execute the function after the specified wait time', function(done) {
    var count = 0;
    delay(function() {
       count++;
    },50);
    setTimeout(function() {
      expect(count).to.eql(0);
    },49);
    setTimeout(function() {
      expect(count).to.eql(1);
      done();
    },51);
  });

  it('should have successfully passed function arguments in', function(done) {
    var count = 0;
    var count2 = 0;
    delay(function(num, num2) {
      count += num;
      count2 += num2;
    },50,5,2);
    setTimeout(function() {
      expect(count).to.eql(0);
      expect(count2).to.eql(0);
    },49);
    setTimeout(function() {
      expect(count).to.eql(5);
      expect(count2).to.eql(2);
      done();
    },51);
  });
});

describe("throttle", function() {
  it('throttled functions should only be able to be called again after the specified time', function(done) {
    var counter = 0;
    var incr = function() {
      counter++;
    };
    var throttledIncr = throttle(incr, 32);
    throttledIncr();
    throttledIncr();
    expect(counter).to.eql(1);
    setTimeout(function() {
      throttledIncr();
      expect(counter).to.eql(2);
      done();
    },33);
  });

  it("throttled functions return their value", function(done) {
    var counter = 0;
    var incr = function() {
      return ++counter;
    };
    var throttledIncr = throttle(incr, 32);
    var result = throttledIncr();
    setTimeout(function() {
      expect(result).to.eql(1);
      expect(counter).to.eql(1);
      done();
    }, 64);
  });

  it("throttled functions called repeatedly should adhere to time limitations", function(done) {
    var counter = 0;
    var incr = function() {
      return ++counter;
    };
    var throttledIncr = throttle(incr, 64);
    var results = [];
    var saveResult = function() {
      results.push(throttledIncr());
    };
    saveResult();
    saveResult();
    setTimeout(saveResult, 32);
    setTimeout(saveResult, 80);
    setTimeout(saveResult, 96);
    setTimeout(saveResult, 180);
    setTimeout(function() {
      expect(results[0]).to.be(1);
      expect(results[1]).to.eql(1);
      expect(results[2]).to.eql(1);
      expect(results[3]).to.eql(2);
      expect(results[4]).to.eql(2);
      expect(results[5]).to.eql(3);
      done();
    }.bind(this),192);
  });
});

describe('sortBy', function() {
  it('should sort by age', function() {
    var people = [{name : 'george', age : 50}, {name : 'sam', age : 30}];
    people = sortBy(people, function(person) {
      return person.age;
    });

    expect(pluck(people, 'name')).to.eql(['sam', 'george']);
  });

  it('should handle undefined values', function() {
    var list = [undefined, 4, 1, undefined, 3, 2];
    var result = sortBy(list, function(i) { return i; });

    expect(result).to.eql([1, 2, 3, 4, undefined, undefined]);
  });

  it('should sort by length', function() {
    var list = ['one', 'two', 'three', 'four', 'five'];
    var sorted = sortBy(list, function(s){
      return s.length;
    });

    expect(sorted).to.eql(['one', 'two', 'four', 'five', 'three']);
  });

  it('should produce results that change the order of the list as little as possible', function() {
    function Pair(x, y) {
      this.x = x;
      this.y = y;
    }

    var collection = [
      new Pair(1, 1), new Pair(1, 2),
      new Pair(1, 3), new Pair(1, 4),
      new Pair(1, 5), new Pair(1, 6),
      new Pair(2, 1), new Pair(2, 2),
      new Pair(2, 3), new Pair(2, 4),
      new Pair(2, 5), new Pair(2, 6),
      new Pair(undefined, 1), new Pair(undefined, 2),
      new Pair(undefined, 3), new Pair(undefined, 4),
      new Pair(undefined, 5), new Pair(undefined, 6)
    ];

    var actual = sortBy(collection, function(pair) {
      return pair.x;
    });

    expect(actual).to.eql(collection);
  });
});

describe('range', function() {
  it('should work with start and stop', function() {
    expect(range(0,2,1)).to.eql([0,1]);
    expect(range(0,5,1)).to.eql([0,1,2,3,4]);
    expect(range(0,30,5)).to.eql([0,5,10,15,20,25]);
  });

  it('should default to step of 1', function() {
    expect(range(0,2)).to.eql([0,1]);
    expect(range(0,5)).to.eql([0,1,2,3,4]);
  });

  it('should default to start of 0', function() {
    expect(range(5)).to.eql([0,1,2,3,4]);
    expect(range(0)).to.eql([]);
  });
});

describe('partition', function() {
  it('should split the array into two based on predicate', function() {
    expect(partition([0,1,2,3,4,5], function(element) {
      return element % 2 === 0;
    })).to.eql([[0,2,4],[1,3,5]]);
    expect(partition([0,1,2,3,4,5], function(element) {
      return element % 2 === 1;
    })).to.eql([[1,3,5],[0,2,4]]);
  });
});

describe('intersection', function() {
  it('should take the set intersection of two arrays', function() {
    var stooges = ['moe', 'curly', 'larry'];
    var leaders = ['moe', 'groucho'];

    expect(intersection(stooges, leaders)).to.eql(['moe']);
  });
});

describe('zip', function() {
  it('should zip together arrays of different lengths', function() {
    var names = ['moe', 'larry', 'curly'], ages = [30, 40, 50], leaders = [true];

    expect(zip(names, ages, leaders)).to.eql([
      ['moe', 30, true],
      ['larry', 40, undefined],
      ['curly', 50, undefined]
    ]);
  });
});

describe('after', function() {
  it('should not be called until after returned function has been called count times', function() {
    var count = 0;
    var incr = function() {
      count++;
    }
    var afterIncr = after(3, incr);
    afterIncr();
    expect(count).to.eql(0);
    afterIncr();
    expect(count).to.eql(0);
    afterIncr();
    expect(count).to.eql(1);
    afterIncr();
    expect(count).to.eql(2);
  });
});

describe('before', function() {
  it('description', function() {
    var count = 0;
    var incr = function() {
      return ++count;
    }
    var beforeIncr = before(2, incr);
    beforeIncr();
    expect(count).to.eql(1);
    beforeIncr();
    expect(count).to.eql(2);
    beforeIncr();
    expect(count).to.eql(2);
  });
});

describe('arrayFactory', function() {
  it('should make an array of squares', function() {
    var square = function(n) { return n * n; };
    expect(arrayFactory(4, square)).to.eql([0, 1, 4, 9]);
  });
});
