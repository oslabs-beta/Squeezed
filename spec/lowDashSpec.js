describe('identity', function() {
  var uniqueObject = {};
  it('should return whatever value is passed into it', function() {
    expect(_.identity(1)).to.equal(1);
    expect(_.identity('string')).to.equal('string');
    expect(_.identity(false)).to.equal(false);
    expect(_.identity(uniqueObject)).to.equal(uniqueObject);
  });
});

describe('isNumber', function() {
  it('should return true for numbers', function() {
    expect(_.isNumber(0)).to.be(true);
    expect(_.isNumber(-1)).to.be(true);
    expect(_.isNumber(1)).to.be(true);
  });

  it('should return false for everything', function() {
    expect(_.isNumber({})).to.be(false);
    expect(_.isNumber([])).to.be(false);
    expect(_.isNumber('a')).to.be(false);
    expect(_.isNumber(true)).to.be(false);
  });
});

describe('isString', function() {
  it('should return true for strings', function() {
    expect(_.isString('a')).to.equl(true);
    expect(_.isString('')).to.be(true);
  });

  it('should return false for everything', function() {
    expect(_.isString({})).to.be(false);
    expect(_.isString([])).to.be(false);
    expect(_.isString(1)).to.be(false);
    expect(_.isString(true)).to.be(false);
  });
});

describe('isArray', function() {
  it('should return true for array', function() {
    expect(_.isArray([])).to.be(true);
    expect(_.isArray([1])).to.be(true);
  });

  it('should return false for everything', function() {
    expect(_.isArray({})).to.be(false);
    expect(_.isArray('a')).to.be(false);
    expect(_.isArray(1)).to.be(false);
    expect(_.isArray(true)).to.be(false);
  });
});

describe('size', function() {
  it('should return the correct size of arrays', function() {
    expect(_.size([])).to.eql(0);
    expect(_.size([1])).to.eql(1);
  });
  it('should return the correct size of objects', function() {
    expect(_.size({a:1,b:2})).to.eql(2);
    expect(_.size({})).to.eql(0);
  });
});

describe('first', function() {
  it('should be able to pull out the first element of an array', function() {
    expect(_.first([1,2,3])).to.equal(1);
    expect(_.first([6])).to.equal(6);
  });

  it('should return undefined for empty array', function() {
    expect(_.first([])).to.be(undefined);
  });
});

describe('last', function() {
  it('should be able to pull out the last element of an array', function() {
    expect(_.last([1,2,3])).to.equal(3);
    expect(_.last([6])).to.equal(6);
  });

  it('should return undefined for empty array', function() {
    expect(_.last([])).to.be(undefined);
  });
});

describe('indexOf', function() {
  it('should have 40 in the list', function() {
    var numbers = [10, 20, 30, 40, 50];
    expect(_.indexOf(numbers, 40)).to.be(3);
  });

  it('should be able to compute indexOf even when the native function is undefined', function() {
    var numbers = [10, 20, 30];
    expect(_.indexOf(numbers, 20)).to.be(1);
  });

  it('returns -1 when the target cannot be found not in the list', function() {
    var numbers = [10, 20, 30, 40, 50];
    expect(_.indexOf(numbers, 35)).to.be(-1);
  });

  it('returns the first index that the target can be found at when there are multiple matches', function() {
    var numbers = [1, 40, 40, 40, 40, 40, 40, 40, 50, 60, 70];
    expect(_.indexOf(numbers, 40)).to.be(1);
  });
});

describe('drop', function() {
  it('should remove first element if second argument not provided', function() {
    expect(_.drop([1, 2, 3])).to.eql([2, 3]);
  });

  it('should remove first n elem', function() {
    expect(_.drop([1, 2, 3], 2)).to.eql([3]);
  });

  it('should return empty array if n is larger than array length', function() {
    expect(_.drop([1, 2, 3], 5)).to.eql([]);
  });

  it('should return entire array if n is 0', function() {
    expect(_.drop([1, 2, 3], 0)).to.eql([1, 2, 3]);
  });
});

describe('dropRight', function() {
  it('should remove last element if second argument not provided', function() {
    expect(_.dropRight([1, 2, 3])).to.eql([1, 2]);
  });

  it('should remove last n elem', function() {
    expect(_.dropRight([1, 2, 3], 2)).to.eql([1]);
  });

  it('should return empty array if n is larger than array length', function() {
    expect(_.dropRight([1, 2, 3], 5)).to.eql([]);
  });

  it('should return entire array if n is 0', function() {
    expect(_.dropRight([1, 2, 3], 0)).to.eql([1, 2, 3]);
  });
});

describe('take', function() {
  it('should return first element if second argument not provided', function() {
    expect(_.take([1, 2, 3])).to.eql([1]);
  });

  it('should remove last n elem', function() {
    expect(_.take([1, 2, 3], 2)).to.eql([1,2]);
  });

  it('should return entire array if n is larger than array length', function() {
    expect(_.take([1, 2, 3], 5)).to.eql([1,2,3]);
  });

  it('should return empty array if n is 0', function() {
    expect(_.take([1, 2, 3], 0)).to.eql([]);
  });
});

describe('forEach', function() {
  it('should iterate over arrays, providing access to the element, index, and array itself', function() {
    var animals = ['ant', 'bat', 'cat'];
    var iterationInputs = [];
    _.forEach(animals, function(animal, index, list) {
      iterationInputs.push([animal, index, list]);
    });
    expect(iterationInputs).to.eql([
      ['ant', 0, animals],
      ['bat', 1, animals],
      ['cat', 2, animals]
    ]);
  });

  it('should only iterate over the array elements, not properties of the array', function() {
    var animals = ['ant', 'bat', 'cat'];
    var iterationInputs = [];
    animals.shouldBeIgnored = 'Ignore me!';
    _.forEach(animals, function(animal, index, list) {
      iterationInputs.push([animal, index, list]);
    });
    expect(iterationInputs).to.eql([
      ['ant', 0, animals],
      ['bat', 1, animals],
      ['cat', 2, animals]
    ]);
  });

  it('should iterate over objects, providing access to the element, index, and object itself', function() {
    var animals = { a: 'ant', b: 'bat', c: 'cat' };
    var iterationInputs = [];
    _.forEach(animals, function(animal, key, object) {
      iterationInputs.push([animal, key, object]);
    });
    expect(iterationInputs).to.eql([
      ['ant', 'a', animals],
      ['bat', 'b', animals],
      ['cat', 'c', animals]
    ]);
  });
});

describe('forEachRight', function() {
  it('should iterate over arrays, providing access to the element, index, and array itself', function() {
    var animals = ['ant', 'bat', 'cat'];
    var iterationInputs = [];
    _.forEachRight(animals, function(animal, index, list) {
      iterationInputs.push([animal, index, list]);
    });
    expect(iterationInputs).to.eql([
      ['ant', 0, animals],
      ['bat', 1, animals],
      ['cat', 2, animals]
    ].reverse());
  });

  it('should only iterate over the array elements, not properties of the array', function() {
    var animals = ['ant', 'bat', 'cat'];
    var iterationInputs = [];
    animals.shouldBeIgnored = 'Ignore me!';
    _.forEachRight(animals, function(animal, index, list) {
      iterationInputs.push([animal, index, list]);
    });
    expect(iterationInputs).to.eql([
      ['ant', 0, animals],
      ['bat', 1, animals],
      ['cat', 2, animals]
    ].reverse());
  });

  it('should iterate over objects, providing access to the element, index, and object itself', function() {
    var animals = { a: 'ant', b: 'bat', c: 'cat' };
    var iterationInputs = [];
    _.forEachRight(animals, function(animal, key, object) {
      iterationInputs.push([animal, key, object]);
    });
    expect(iterationInputs).to.eql([
      ['ant', 'a', animals],
      ['bat', 'b', animals],
      ['cat', 'c', animals]
    ].reverse());
  });
});

describe('map', function() {
  it('should apply a function to every value in an array', function() {
    var doubled = _.map([1, 2, 3], function(num) {
      return num * 2;
    });
    expect(doubled).to.eql([2, 4, 6]);
  });
});

describe('filter', function() {
  it('should return all even numbers in an array', function() {
    var isEven = function(num) { return num % 2 === 0; };
    var evens = _.filter([1, 2, 3, 4, 5, 6], isEven);
    expect(evens).to.eql([2, 4, 6]);
  });

  it('should return all odd numbers in an array', function() {
    var isOdd = function(num) { return num % 2 !== 0; };
    var odds = _.filter([1, 2, 3, 4, 5, 6], isOdd);
    expect(odds).to.eql([1, 3, 5]);
  });
});

describe('reject', function() {
  it('should reject all even numbers', function() {
    var isEven = function(num) { return num % 2 === 0; };
    var odds = _.reject([1, 2, 3, 4, 5, 6], isEven);
    expect(odds).to.eql([1, 3, 5]);
  });

  it('should reject all odd numbers', function() {
    var isOdd = function(num) { return num % 2 !== 0; };
    var evens = _.reject([1, 2, 3, 4, 5, 6], isOdd);
    expect(evens).to.eql([2, 4, 6]);
  });
});

describe('uniq', function() {
  it('should return all unique values contained in an unsorted array', function() {
    var list = [1, 2, 1, 3, 1, 4];
    expect(_.uniq(list)).to.eql([1, 2, 3, 4]);
  });

  it('should handle iterators that work with a sorted array', function() {
    var iterator = function(value) { return value +1; };
    var list = [1, 2, 2, 3, 4, 4];
    expect(_.uniq(list, true, iterator)).to.eql([1, 2, 3, 4]);
  });
});

describe('pluck', function() {
  it('should return values contained at a user-defined property', function() {
    var people = [
      {name : 'moe', age : 30},
      {name : 'curly', age : 50}
    ];
    expect(_.pluck(people, 'name')).to.eql(['moe', 'curly']);
  });
});

describe('reduce', function() {
  it('should be able to sum up an array', function() {
    var add = function(tally, item) {return tally + item; };
    var total = _.reduce([1, 2, 3], add, 0);
    expect(total).to.equal(6);
  });

  it('should be able to find the difference in an array', function() {
    var difference = function(tally, item) {return tally - item; };
    var total = _.reduce([1, 2, 3], difference, 0);
    expect(total).to.equal(-6);
  });

  it('should default to the last item in the array', function() {
    var difference = function(tally, item) {return tally - item; };
    var total = _.reduce([1, 2, 3], difference);
    expect(total).to.equal(-4);
  });

  it('should default to the first item in the array', function() {
    var add = function(tally, item) {return tally + item; };
    var total = _.reduce([1, 2, 3], add);
    expect(total).to.equal(6);
  });

});

describe('reduceRight', function() {
  it('should be able to find the difference in an array', function() {
    var difference = function(tally, item) {return tally - item; };
    var total = _.reduceRight([1, 2, 3], difference, 0);
    expect(total).to.equal(-6);
  });

  it('should default to the last item in the array', function() {
    var difference = function(tally, item) {return tally - item; };
    var total = _.reduceRight([1, 2, 3], difference);
    expect(total).to.equal(0);
  });

});

describe('flatten', function() {
  it('should flatten nested arrays', function() {
    expect(_.flatten([1, [2, 3, [4]]])).to.eql([1, 2, 3, [4]]);
  });
});

describe('flattenDeep', function() {
  it('should flatten nested arrays recursively', function() {
    expect(_.flattenDeep([1, [2, 3, [4]]])).to.eql([1, 2, 3, 4]);
  });
});

describe('extend', function() {
  it('returns the first argument', function() {
    var to = {};
    var from = {};
    var extended = _.extend(to, from);
    expect(extended).to.equal(to);
  });

  it('should extend an object with the attributes of another', function() {
    var to = {};
    var from = {a:'b'};
    var extended = _.extend(to, from);
    expect(extended.a).to.equal('b');
  });

  it('should override properties found on the destination', function() {
    var to = {a:'x'};
    var from = {a:'b'};
    var extended = _.extend(to, from);
    expect(extended.a).to.equal('b');
  });

  it('should not override properties not found in the source', function() {
    var to = {x:'x'};
    var from = {a:'b'};
    var extended = _.extend(to, from);
    expect(extended.x).to.equal('x');
  });

  it('should extend from multiple source objects', function() {
    var extended = _.extend({x:1}, {a:2}, {b:3});
    expect(extended).to.eql({x:1, a:2, b:3});
  });

  it('in the case of a conflict, it should use the last property\'s values when extending from multiple source objects', function() {
    var extended = _.extend({x:'x'}, {a:'a', x:2}, {a:1});
    expect(extended).to.eql({x:2, a:1});
  });

  it('should copy undefined values', function() {
    var extended = _.extend({}, {a: void 0, b: null});
    expect('a' in extended && 'b' in extended).to.be(true);
  });
});

describe('clone', function() {
  it('should return shallow copy of object', function() {
    var users = [{ 'user': 'barney' },{ 'user': 'fred' }];
    var shallowClone = _.clone(users);
    expect(shallowClone[0].user).to.equal(users[0].user);
    expect(shallowClone === users).to.be(true);
  });
});

describe('cloneDeep', function() {
  it('should return deep copy of object', function() {
    var users = [{ 'user': 'barney' },{ 'user': 'fred' }];
    var deepClone = _.cloneDeep(users);
    expect(deepClone[0].user).to.equal(users[0].user);
    expect(deepClone).to.not.equal(users);
    expect(deepClone).to.eql(users);
  });
});

describe('once', function() {
  it('should only run a user-defined function if it hasn\'t been run before', function() {
    var num = 0;
    var increment = _.once(function() {
      num += 1;
    });
    increment();
    increment();
    expect(num).to.equal(1);
  });
});

describe('memoize', function() {
  var fib, fastFib, timeCheck, fastTime, wait;
  beforeEach(function() {
    fib = function(n) {
      if(n < 2){ return n; }
      return fib(n - 1) + fib(n - 2);
    };
    fastFib = _.memoize(fib);
    timeCheck = function(str) { return str + Date.now(); };
    fastTime = _.memoize(timeCheck);
    // Synchronous sleep: terrible for web development, awesome for testing _.memoize
    wait = function(t) {
      var start = Date.now();
      while ((Date.now() - start) < t){}
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
});

describe('delay', function() {
  var clock;
  beforeEach(function() {
    clock = sinon.useFakeTimers();
  });
  afterEach(function() {
    clock.restore();
  });
  it('should only execute the function after the specified wait time', function() {
    var callback = sinon.spy();
    _.delay(callback, 100);
    clock.tick(99);
    expect(callback.notCalled).to.be(true);
    clock.tick(1);
    console.log(callback.calledOnce);
    expect(callback.calledOnce).to.be(true);
  });
});