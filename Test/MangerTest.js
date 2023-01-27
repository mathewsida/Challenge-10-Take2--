const Manager = require('../Library/Manager');



test('Testing class Manager structure', () => 
{
    const e = new Manager();
    expect(typeof(e)).toBe('object');
});

test('Checking testname to be name', () => 
{
    const testName = 'Shane';
    const e = new Manager(testName);
    expect(e.name).toBe(testName);
});

test('Checking testId to be id', ()=> 
{
    const name = 'Shane';
    const testId = 1;
    const email = 'Shane@yahoo.com'
    const officeNumber = 1;
    const i = new Manager(testId);
    expect(i.id).toBe(testId);
});

test('Checking testEmail to be email', () => 
{
    const testEmail = 'Shane@gmail.com';
    const e = new Manager(testEmail);
    expect(e.email).toBe(testEmail);
});

test('Checking officeNum to be officeNumber', () => 
{
    const officeNum = 1;
    const e = new Manager(officeNum);
    expect(e.officeNumber).toBe(officeNum);
})