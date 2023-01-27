
const Engineer = require('../Library/Engineer');

test('Testing class Engineer structure', () => {
    const e = new Engineer();
    expect(typeof(e)).toBe('object');
});

test('Checking testname to be name', () => {
    const testName = 'Collin';
    const e = new Engineer(testName);
    expect(e.name).toBe(testName);
});

test('Checking testId to be id', ()=> {
    const testId = 2;
    const i = new Engineer(testId);
    expect(i.id).toBe(testId);
});

test('Checking testEmail to be email', () => {
    const testEmail = 'Collin@gmail.com';
    const e = new Engineer(testEmail);
    expect(e.email).toBe(testEmail);
});

test('Checking officeNum to be officeNumber', () => {
    const officeNum = 2;
    const e = new Engineer(officeNum);
    expect(e.officeNumber).toBe(officeNum);
})