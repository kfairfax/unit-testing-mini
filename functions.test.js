let fns = require('./functions.js');

test('returnTwo should return 2', () => {
    let result = fns.returnTwo();
    expect(result).toBe(2);
})

// to be is like using === strict equality

test('greeting("James") should return correct string', () => {
    let str = fns.greeting('James');
    expect(str).toEqual('Hello, James.');
})

// toEqual could check two objects or arrays to see if the contents are the same by reference

test('add (1, 2)should return correct sum', () => {
    let sum1 = fns.add(1, 2);
    expect(sum1).toBe(3);

})

// test.only will run only that one test and ignore all the others
// test.skip skips one test and runs all the rest

test('add should return correct sum', () => {
    expect(fns.add(5, 60)).toBe(65);
})

describe('Math Tests', () => {
    test('multiply stuff', () => {
        expect(fns.multiply(1, 2)).toBe(2)
    }),
    test('substract stuff', () => {
        expect(fns.subtract(3, 10)).not.toBe(8)
    })
})