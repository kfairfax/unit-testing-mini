let Person = require('./person.js');

test('1985 should be millennial', () => {
    //arrange first
    let personObj = new Person(1985);
    // act
    let result = personObj.isMillennial();
    // assertion
    expect(result).toBeTruthy();
});

test('1920 should be retiree', () => {
    let personObj = new Person(1920);
    let result2 = personObj.isRetiree();
    expect(result2).toBeTruthy();
})