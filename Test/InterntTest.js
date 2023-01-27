const Intern = require('../Library/Intern');


test('Testing class Intern structure', () => {
    const e = new Intern();
    expect(typeof(e)).toBe('object');
});

test('Checking testname to be name', () => {
    const testName = 'John';
    const e = new Intern(testName);
    expect(e.name).toBe(testName);
});

test('Checking testId to be id', ()=> {
    const testId = 3;
    const i = new Intern(testId);
    expect(i.id).toBe(testId);
});

test('Checking testEmail to be email', () => {
    const testEmail = 'john@gmail.com';
    const e = new Intern(testEmail);
    expect(e.email).toBe(testEmail);
});

test('Checking officeNum to be officeNumber', () => {
    const officeNum = 3;
    const e = new Intern(officeNum);
    expect(e.officeNumber).toBe(officeNum);
})