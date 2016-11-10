describe('isNegativeOrOdd', () => {
  it('should return true if number is odd', () => {
    expect(isNegativeOrOdd(1)).to.eql(true);
    expect(isNegativeOrOdd(3)).to.eql(true);
    expect(isNegativeOrOdd(5)).to.eql(true);
  });

  it('should return true if number is negative', () => {
    expect(isNegativeOrOdd(-1)).to.eql(true);
    expect(isNegativeOrOdd(-2)).to.eql(true);
    expect(isNegativeOrOdd(-3)).to.eql(true);
  });

  it('should return false if number is even', () => {
    expect(isNegativeOrOdd(0)).to.eql(false);
    expect(isNegativeOrOdd(2)).to.eql(false);
    expect(isNegativeOrOdd(4)).to.eql(false);
  });
});

describe('repeat', () => {
  it('should repeat inputted string count times', () => {
    expect(repeat('abc',3)).to.eql('abcabcabc');
    expect(repeat('***',2)).to.eql('******');
  });
});

describe('reverseString', () => {
  it('should reverse a string', () => {
    expect(reverseString('')).to.eql('');
    expect(reverseString('abc')).to.eql('cba');
    expect(reverseString('abcd')).to.eql('dcba');
  });
});



describe('reverseObject', () => {
  it('should reverse object', () => {
    expect(reverseObject({a:'b'})).to.eql({b:'a'});
    expect(reverseObject({a:1})).to.eql({'1':'a'});
  });

  it('should reverse multiple properties', () => {
    expect(reverseObject({a:1,b:2})).to.eql({'1':'a','2':'b'});
    expect(reverseObject({a:1,b:2,c:3})).to.eql({'1':'a','2':'b','3':'c'});
  });
});


describe('isNumber', () => {
  it('should return true for numbers', () => {
    expect(isNumber(0)).to.be(true);
    expect(isNumber(-1)).to.be(true);
    expect(isNumber(1)).to.be(true);
  });

  it('should return false for everything', () => {
    expect(isNumber({})).to.be(false);
    expect(isNumber([])).to.be(false);
    expect(isNumber('a')).to.be(false);
    expect(isNumber(true)).to.be(false);
  });
});

describe('isArray', () => {
  it('should return true for array', () => {
    expect(isArray([])).to.be(true);
    expect(isArray([1])).to.be(true);
  });

  it('should return false for everything', () => {
    expect(isArray({})).to.be(false);
    expect(isArray('a')).to.be(false);
    expect(isArray(1)).to.be(false);
    expect(isArray(true)).to.be(false);
  });
});

describe('isObject', () => {
  it('should return true for object', () => {
    expect(isObject({})).to.be(true);
    expect(isObject({a:1})).to.be(true);
    expect(isObject([])).to.be(true);
  });

  it('should return false for everything', () => {
    expect(isObject('a')).to.be(false);
    expect(isObject(1)).to.be(false);
    expect(isObject(true)).to.be(false);
  });
});

describe('isNull', () => {
  it('should return true for null', () => {
    expect(isNull(null)).to.be(true);
  });

  it('should return false for everything', () => {
    expect(isNull(5)).to.eql(false);
    expect(isNull('string')).to.eql(false);
    expect(isNull({})).to.eql(false);
    expect(isNull([])).to.eql(false);
    expect(isNull(undefined)).to.eql(false);
    expect(isNull(true)).to.eql(false);
    expect(isNull(false)).to.eql(false);
  });

});

describe('clone', () => {
  it('should return shallow copy of array', () => {
    const users = [{ 'user': 'barney' },{ 'user': 'fred' }];
    const shallowClone = clone(users);
    expect(shallowClone).to.not.equal(users);
    expect(shallowClone[0].user).to.equal(users[0].user);
    expect(shallowClone[0]).to.equal(users[0]);
  });

  it('should return shallow copy of an object', () => {
    const users = {a: {b:1}, c: {d: 2}};
    const shallowClone = clone(users);
    expect(users).to.not.equal(shallowClone);
    expect(users.a).to.eql(shallowClone.a);
    expect(users.c).to.eql(shallowClone.c);
  });
});

describe('size', () => {
  it('should return the correct size of arrays', () => {
    expect(size([])).to.eql(0);
    expect(size([1])).to.eql(1);
  });
  it('should return the correct size of objects', () => {
    expect(size({a:1,b:2})).to.eql(2);
    expect(size({})).to.eql(0);
    expect(size({a:1,b:2,length:1})).to.eql(3);
  });
});

describe('indexOf', () => {
  it('should have 40 in the list', () => {
    expect(indexOf([10, 20, 30, 40, 50], 40)).to.be(3);
  });

  it('should be able to compute indexOf even when the native function is undefined', () => {
    expect(indexOf([10, 20, 30], 20)).to.be(1);
  });

  it('returns -1 when the target cannot be found not in the list', () => {
    expect(indexOf([10, 20, 30, 40, 50], 35)).to.be(-1);
  });

  it('returns the first index that the target can be found at when there are multiple matches', () => {
    expect(indexOf([1, 40, 40, 40, 40, 40, 40, 40, 50, 60, 70], 40)).to.be(1);
  });
});

describe('drop', () => {
  let numbers = [];

  beforeEach(() => {
    numbers = [1, 2, 3];
  });

  it('should remove first element if second argument not provided', () => {
    expect(drop(numbers)).to.eql([2, 3]);
    expect(numbers).to.eql([1,2,3]);
  });

  it('should remove first n elem', () => {
    expect(drop(numbers, 2)).to.eql([3]);
    expect(numbers).to.eql([1,2,3]);
  });

  it('should return empty array if n is larger than array length', () => {
    expect(drop(numbers, 5)).to.eql([]);
    expect(numbers).to.eql([1,2,3]);
  });

  it('should return entire array if n is 0', () => {
    expect(drop(numbers, 0)).to.eql([1, 2, 3]);
    expect(numbers).to.eql([1,2,3]);
  });

  it('should not mutate the input array', () => {
    drop(numbers);
    expect(numbers).to.eql([1,2,3]);
    drop(numbers, 2);
    expect(numbers).to.eql([1,2,3]);
    drop(numbers, 5);
    expect(numbers).to.eql([1,2,3]);
  });
});

describe('dropRight', () => {
  let numbers = [];

  beforeEach(() => {
    numbers = [1, 2, 3];
  });

  it('should remove last element if second argument not provided', () => {
    expect(dropRight(numbers)).to.eql([1, 2]);
    expect(numbers).to.eql([1,2,3]);
  });

  it('should remove last n elem', () => {
    expect(dropRight(numbers, 2)).to.eql([1]);
    expect(numbers).to.eql([1,2,3]);
  });

  it('should return empty array if n is larger than array length', () => {
    expect(dropRight(numbers, 5)).to.eql([]);
    expect(numbers).to.eql([1,2,3]);
  });

  it('should return entire array if n is 0', () => {
    expect(dropRight(numbers, 0)).to.eql([1, 2, 3]);
    expect(numbers).to.eql([1,2,3]);
  });
});

describe('take', () => {
  let numbers = [];

  beforeEach( function() {
    numbers = [1, 2, 3];
  });

  it('should return first element if second argument not provided', () => {
    expect(take(numbers)).to.eql([1]);
    expect(numbers).to.eql([1,2,3]);
  });

  it('should return first n elem', () => {
    expect(take(numbers, 2)).to.eql([1,2]);
    expect(numbers).to.eql([1,2,3]);
  });

  it('should return entire array if n is larger than array length', () => {
    expect(take(numbers, 5)).to.eql([1,2,3]);
    expect(numbers).to.eql([1,2,3]);
  });

  it('should return empty array if n is 0', () => {
    expect(take(numbers, 0)).to.eql([]);
    expect(numbers).to.eql([1,2,3]);
  });
});

describe('difference', () => {
  it('should split return an array with the elements from the first array that are not present in the second array ', () => {
    expect(difference([0,1,2,3,4,5],[3,5])).to.eql([0,1,2,4]);
  });
});

describe('forEach', () => {
  let fruits = [];
  let iterationInputs = [];

  beforeEach(() => {
    fruits = ['apple', 'banana', 'carrot'];
    iterationInputs = [];
  });

  it('should iterate over arrays, providing access to the element, index, and array itself', () => {
    forEach(fruits, (fruit, index, list) => {
      iterationInputs.push([fruit, index, list]);
    });
    expect(iterationInputs).to.eql([
      ['apple', 0, fruits],
      ['banana', 1, fruits],
      ['carrot', 2, fruits]
    ]);
  });

  it('should only iterate over the array elements, not properties of the array', () => {
    fruits.shouldBeIgnored = 'Ignore me!';
    forEach(fruits, (fruit, index, list) => {
      iterationInputs.push([fruit, index, list]);
    });
    expect(iterationInputs).to.eql([
      ['apple', 0, fruits],
      ['banana', 1, fruits],
      ['carrot', 2, fruits]
    ]);
  });
});

describe('forEachRight', () => {
  let fruits = [];
  let iterationInputs = [];

  beforeEach(() => {
    fruits = ['apple', 'banana', 'carrot'];
    iterationInputs = [];
  });

  it('should iterate over arrays, providing access to the element, index, and array itself', () => {
    forEachRight(fruits, (fruit, index, list) => {
      iterationInputs.push([fruit, index, list]);
    });
    expect(iterationInputs).to.eql([
      ['apple', 0, fruits],
      ['banana', 1, fruits],
      ['carrot', 2, fruits]
    ].reverse());
  });

  it('should only iterate over the array elements, not properties of the array', () => {
    fruits.shouldBeIgnored = 'Ignore me!';
    forEachRight(fruits, (fruit, index, list) => {
      iterationInputs.push([fruit, index, list]);
    });
    expect(iterationInputs).to.eql([
      ['apple', 0, fruits],
      ['banana', 1, fruits],
      ['carrot', 2, fruits]
    ].reverse());
  });
});

describe('map', () => {
  it('should apply a function to every value in an array', () => {
    const doubled = map([1, 2, 3], num => num * 2);
    expect(doubled).to.eql([2, 4, 6]);
  });
});

describe('filter', () => {
  it('should return all even numbers in an array', () => {
    const evens = filter([1, 2, 3, 4, 5, 6], num => num % 2 === 0);
    expect(evens).to.eql([2, 4, 6]);
  });

  it('should return all odd numbers in an array', () => {
    const odds = filter([1, 2, 3, 4, 5, 6], num => num % 2 !== 0);
    expect(odds).to.eql([1, 3, 5]);
  });

  it('should filter all odd values in object', () => {
    const evens = filter({a:1, b:2, c:3, d:4}, (value, key, collection) => value % 2 !== 0);
    expect(evens).to.eql({a:1, c:3});
  });
});

describe('reject', () => {
  it('should reject all even numbers', () => {
    const odds = reject([1, 2, 3, 4, 5, 6], num => num % 2 === 0);
    expect(odds).to.eql([1, 3, 5]);
  });

  it('should reject all odd numbers', () => {
    const evens = reject([1, 2, 3, 4, 5, 6], num => num % 2 !== 0);
    expect(evens).to.eql([2, 4, 6]);
  });

  it('should reject all odd values in object', () => {
    const evens = reject({a:1, b:2, c:3, d:4}, (value, key, collection) => value % 2 !== 0);
    expect(evens).to.eql({b:2, d:4});
  });
});

describe('uniq', () => {
  it('should return all unique values contained in an unsorted array', () => {
    expect(uniq([1, 2, 1, 3, 1, 4])).to.eql([1, 2, 3, 4]);
  });
});

describe('pluck', () => {
  it('should return values contained at a user-defined property', () => {
    const people = [
      {name : 'moe', age : 30},
      {name : 'curly', age : 50}
    ];
    expect(pluck(people, 'name')).to.eql(['moe', 'curly']);
  });
});

describe('trim', () => {
  it('should remove leading white space', () => {
    expect(trim('hello')).to.eql('hello');
    expect(trim(' hello')).to.eql('hello');
    expect(trim('   hello')).to.eql('hello');
  });

  it('should remove trailing white space', () => {
    expect(trim('hello ')).to.eql('hello');
    expect(trim('hello  ')).to.eql('hello');
    expect(trim('hello              ')).to.eql('hello');
  });

  it('should remove both', () => {
    expect(trim('  hello  ')).to.eql('hello');
  });

  it('should not remove interior white space', () => {
    expect(trim('hello  world')).to.eql('hello  world');
  });
});

describe('reduce', () => {
  it('should sum up an array when no start provided', () => {
    const total = reduce([1, 2, 3], (tally, item) => tally + item);
    expect(total).to.equal(6);
  });

  it('should find the difference in an array when no start provided', () => {
    const total = reduce([1, 2, 3], (tally, item) => tally - item);
    expect(total).to.equal(-4);
  });

  it('should sum up an array when start provided', () => {
    const total = reduce([1, 2, 3], (tally, item) => tally + item, 2);
    expect(total).to.equal(8);
  });

  it('should find the difference in an array when start provided', () => {
    const total = reduce([1, 2, 3], (tally, item) => tally - item, -1);
    expect(total).to.equal(-7);
  });
});

describe('flatten', () => {
  it('should flatten nested arrays', () => {
    expect(flatten([1, [2, 3, [4]]])).to.eql([1, 2, 3, [4]]);
    expect(flatten([[1, 2], [3, 4]])).to.eql([1, 2, 3, 4]);
  });
});

describe('flattenDeep', () => {
  it('should flatten nested arrays recursively', () => {
    expect(flattenDeep([1, [2, 3, [4]]])).to.eql([1, 2, 3, 4]);
    expect(flattenDeep([[1], [2, 3, [4]]])).to.eql([1, 2, 3, 4]);
  });
});

describe('extend', () => {
  it('returns the first argument if no additional properties provided', () => {
    const first = {a: 'b'};
    expect(extend(first, {}, {})).to.equal(first);
  });

  it('should extend an object with the attributes of another', () => {
    const first = {};
    const last = {a: 'b'};
    extend(first, last);
    expect(first.a).to.equal('b');
  });

  it('should override properties found on the destination', () => {
    const first = {a: 'x'};
    const last = {a: 'b'};
    extend(first, last);
    expect(first.a).to.equal('b');
  });

  it('should not override properties not found in the source', () => {
    const first = {x: 'x'};
    const last = {a: 'b'};
    extend(first, last);
    expect(first.x).to.equal('x');
  });

  it('should extend from multiple source objects', () => {
    const first = {x: 1};
    extend(first, {a: 2}, {b: 3});
    expect(first).to.eql({x: 1, a: 2, b: 3});
  });

  it('in the case of a conflict, it should use the last property\'s values', () => {
    expect(extend({x: 'x'}, {a: 'a', x: 2}, {a: 1})).to.eql({x: 2, a: 1});
  });

  it('should copy undefined values', () => {
    const extended = extend({}, {a: void 0, b: null});
    expect('a' in extended && 'b' in extended).to.be(true);
  });
});

describe('isString', () => {
  it('should return true for strings', () => {
    expect(isString('a')).to.be(true);
    expect(isString('5')).to.be(true);
  });

  it('should return false for everything', () => {
    expect(isString({})).to.be(false);
    expect(isString([])).to.be(false);
    expect(isString(5)).to.be(false);
    expect(isString(true)).to.be(false);
  });

  it('should return false for null and undefined', () => {
    expect(isString(undefined)).to.be(false);
    expect(isString(null)).to.be(false);
  })
});

describe('cloneDeep', () => {
  it('should return deep copy of object', () => {
    const users = [
      { 'user': 'barney' },
      { 'user': 'fred' },
      { 'user': 'andy', friends: { 'user': 'alex' } }
    ];
    const deepClone = cloneDeep(users);
    // Hey junior, does something about these tests look contradictory? ;)
    expect(deepClone).to.eql(users);
    expect(deepClone).to.not.equal(users);
    expect(deepClone[0]).to.eql(users[0]);
    expect(deepClone[0]).to.not.equal(users[0]);
    expect(deepClone[0].user).to.equal(users[0].user);
    expect(deepClone[2].friends).to.eql(users[2].friends);
    expect(deepClone[2].friends).to.not.equal(users[2].friends);
  });
    
  it('should be able to clone an unknown amount of layers deep', () => {
    const users = [
      'Simon',
      { 'user': 'Will B' },
      { 'user': 'Weylin',
        friends: {
          'user': 'Michael',
          friends: {
            'user': 'Mickey',
            friends: {
              'user': 'Brandon',
              friends: {
                'user': 'Yung Mike',
                friends: {
                  'user': 'Sam',
                  friends: {
                    'user': 'Will S',
                    friends: {
                      'user': 'Dan C',
                    }
                  }
                }
              }
            }
          }
        }
      }
    ];
    console.log(users);
    const deepClone = cloneDeep(users);

    expect(deepClone).to.eql(users);
    expect(deepClone).to.not.equal(users);
    expect(deepClone[0]).to.eql(users[0]);
    expect(deepClone[1]).to.eql(users[1]);
    expect(deepClone[1]).to.not.equal(users[1]);
    expect(deepClone[1].user).to.equal(users[1].user);
    expect(deepClone[2]).to.eql(users[2]);
    expect(deepClone[2]).to.not.equal(users[2]);
    expect(deepClone[2].user).to.equal(users[2].user);
    expect(deepClone[2].friends).to.eql(users[2].friends);
    expect(deepClone[2].friends).to.not.equal(users[2].friends);
    expect(deepClone[2].friends.user).to.equal(users[2].friends.user);
    expect(deepClone[2].friends.friends).to.eql(users[2].friends.friends);
    expect(deepClone[2].friends.friends).to.not.equal(users[2].friends.friends);
    expect(deepClone[2].friends.friends.user).to.equal(users[2].friends.friends.user);
    expect(deepClone[2].friends.friends.friends.friends.friends.friends.friends).to.eql(users[2].friends.friends.friends.friends.friends.friends.friends);
    expect(deepClone[2].friends.friends.friends.friends.friends.friends.friends).to.not.equal(users[2].friends.friends.friends.friends.friends.friends.friends);
    expect(deepClone[2].friends.friends.friends.friends.friends.friends.friends.user).to.equal(users[2].friends.friends.friends.friends.friends.friends.friends.user);
  });
});

describe('applyAndEmpty', () => {
  it('should iterate over the queue and submit input', () => {
    const puzzlers = [
      a => (8 * a - 10),
      b => ((b - 3) * (b - 3) * (b - 3)),
      c => (c * c + 4),
      d => (d % 5),
    ];
    expect(applyAndEmpty(2, puzzlers)).to.equal(3);
  });
});

describe('once', () => {
  it('should only run a user-defined function if it hasn\'t been run before', () => {
    let num = 0;
    const increment = once(() => {
      num += 1;
    });
    increment();
    increment();
    expect(num).to.equal(1);
  });
});

describe('memoize', () => {
  let fib, fastFib, timeCheck, fastTimeCheck, add, fastAdd, wait;

  beforeEach(() => {
    fib = (n) => (n < 2) ? n : fib(n - 1) + fib(n - 2);
    fastFib = memoize(fib);
    timeCheck = (str) => str + Date.now();
    fastTimeCheck = memoize(timeCheck);
    add = (a, b, c) => a + b + c;
    fastAdd = memoize(add);

    // Synchronous sleep: terrible for web development, awesome for testing memoize
    wait = (t) => {
      const start = Date.now();
      while ((Date.now() - start) < t) 'wait';
    };
  });

  it('a memoized function should produce the same result when called with the same arguments', () => {
    expect(fib(10)).to.equal(55);
    expect(fastFib(10)).to.equal(55);
  });

  it('should give different results for different arguments', () => {
    expect(fastFib(10)).to.not.equal(fastFib(7));
  });

  it('should not run the function twice for the same given argument', () => {
    const firstTime = timeCheck('shazaam!');
    wait(5);
    const secondTime = fastTimeCheck('shazaam!');
    wait(5);
    expect(firstTime).to.not.equal(secondTime);
    expect(fastTimeCheck('shazaam!')).to.equal(secondTime);
  });

  it('should accept multiple arguments', () => {
    expect(add(10, 5, 4)).to.equal(19);
    expect(fastAdd(10, 5, 4)).to.equal(19);
  });

  it('should work with objects as arguments', () => {
    const firstTime = timeCheck({ foo: 'bar' });
    wait(5);
    const secondTime = fastTimeCheck({ foo: 'bar' });
    wait(5);
    expect(firstTime).to.not.equal(secondTime);
    expect(fastTimeCheck({ foo: 'bar' })).to.equal(secondTime);
    expect(fastTimeCheck({ foo: 'bar' })).to.not.equal(fastTimeCheck({ different: 'result' }));
  });

  it('should work with arrays as arguments', () => {
    const firstTime = timeCheck(['foo', 'bar']);
    wait(5);
    const secondTime = fastTimeCheck(['foo', 'bar']);
    wait(5);
    expect(firstTime).to.not.equal(secondTime);
    expect(fastTimeCheck(['foo', 'bar'])).to.equal(secondTime);
    expect(fastTimeCheck(['foo', 'bar'])).to.not.equal(fastTimeCheck(['different', 'results']));
  });
});

describe('delay', () => {
  it('should only execute the function after the specified wait time', (done) => {
    let count = 0;
    delay(() => count++, 50);
    setTimeout(() => expect(count).to.eql(0), 49);
    setTimeout(() => {
      expect(count).to.eql(1);
      done();
    }, 51);
  });

  it('should have successfully passed function arguments in', (done) => {
    let count = 0
    let count2 = 0;
    delay((num, num2) => {
      count += num;
      count2 += num2;
    }, 50, 5, 2);
    setTimeout(() => {
      expect(count).to.eql(0);
      expect(count2).to.eql(0);
    }, 49);
    setTimeout(() => {
      expect(count).to.eql(5);
      expect(count2).to.eql(2);
      done();
    }, 51);
  });
});

describe("throttle", () => {
  it('throttled functions should only be able to be called again after the specified time', (done) => {
    let counter = 0;
    const incr = () => counter++;
    const throttledIncr = throttle(incr, 32);

    throttledIncr();
    throttledIncr();
    expect(counter).to.eql(1);
    setTimeout(() => {
      throttledIncr();
      expect(counter).to.eql(2);
      done();
    },33);
  });

  it('throttled functions return their value', (done) => {
    let counter = 0;
    const incr = () => ++counter;
    const throttledIncr = throttle(incr, 32);
    const result = throttledIncr();
    setTimeout(() => {
      expect(result).to.eql(1);
      expect(counter).to.eql(1);
      done();
    }, 64);
  });

  it('throttled functions called repeatedly should adhere to time limitations', (done) => {
    let counter = 0;
    const incr = () => ++counter;
    const throttledIncr = throttle(incr, 64);
    const results = [];
    const saveResult = () => results.push(throttledIncr());
    saveResult();
    saveResult();
    setTimeout(saveResult, 32);
    setTimeout(saveResult, 80);
    setTimeout(saveResult, 96);
    setTimeout(saveResult, 180);
    setTimeout(() => {
      expect(results[0]).to.eql(1);
      expect(results[1]).to.be(undefined);
      expect(results[2]).to.be(undefined);
      expect(results[3]).to.eql(2);
      expect(results[4]).to.be(undefined);
      expect(results[5]).to.eql(3);
      done();
    }, 192);
  });
});

describe('sortBy', () => {
  it('should sort by age', () => {
    let people = [{name : 'george', age : 50}, {name : 'sam', age : 30}];
    people = sortBy(people, person => person.age);
    expect(pluck(people, 'name')).to.eql(['sam', 'george']);
  });

  it('should handle undefined values', () => {
    let list = [undefined, 4, 1, undefined, 3, 2];
    list = sortBy(list, i => i);
    expect(list).to.eql([1, 2, 3, 4, undefined, undefined]);
  });

  it('should sort by length', () => {
    let list = ['one', 'two', 'three', 'four', 'five'];
    list = sortBy(list, s => s.length);
    expect(list).to.eql(['one', 'two', 'four', 'five', 'three']);
  });

  it('should produce results that change the order of the list as little as possible', () => {
    class Pair {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
    }

    const collection = [
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

    const sorted = sortBy(collection, pair => pair.x);
    expect(sorted).to.eql(collection);
  });
});

describe('range', () => {
  it('should work with start and stop', () => {
    expect(range(0,2,1)).to.eql([0,1]);
    expect(range(1,5,1)).to.eql([1,2,3,4]);
    expect(range(0,30,5)).to.eql([0,5,10,15,20,25]);
  });

  it('should default to step of 1', () => {
    expect(range(0,2)).to.eql([0,1]);
    expect(range(1,5)).to.eql([1,2,3,4]);
  });

  it('should default to start of 0', () => {
    expect(range(5)).to.eql([0,1,2,3,4]);
    expect(range(0)).to.eql([]);
  });
});

describe('partition', () => {
  it('should split the array into two based on predicate', () => {
    expect(partition([0,1,2,3,4,5], num => num % 2 === 0)).to.eql([[0,2,4],[1,3,5]]);
    expect(partition([0,1,2,3,4,5], num => num % 2 === 1)).to.eql([[1,3,5],[0,2,4]]);
  });
});

describe('intersection', () => {
  it('should take the set intersection of two arrays', () => {
    const stooges = ['moe', 'curly', 'larry'];
    const leaders = ['moe', 'groucho'];
    expect(intersection(stooges, leaders)).to.eql(['moe']);
  });
});

describe('zip', () => {
  it('should zip together arrays of different lengths', () => {
    const names = ['moe', 'larry', 'curly'];
    const ages = [30, 40, 50];
    const leaders = [true];
    expect(zip(names, ages, leaders)).to.eql([
      ['moe', 30, true],
      ['larry', 40, undefined],
      ['curly', 50, undefined]
    ]);
  });
});

describe('after', () => {
  it('should not be called until after returned function has been called count times', () => {
    let count = 0;
    const incr = () => count++;
    const afterIncr = after(3, incr);

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

describe('before', () => {
  it('description', () => {
    let count = 0;
    const incr = () => ++count;
    const beforeIncr = before(2, incr);

    beforeIncr();
    expect(count).to.eql(1);
    beforeIncr();
    expect(count).to.eql(2);
    beforeIncr();
    expect(count).to.eql(2);
  });
});

describe('arrayFactory', () => {
  it('should make an array of squares', () => {
    const square = n => n * n;
    expect(arrayFactory(4, square)).to.eql([0, 1, 4, 9]);
  });
});
