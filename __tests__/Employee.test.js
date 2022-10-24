import { Employee } from '../lib/Employee.js';

const myEmployee = new Employee('Jeremy', 1234, 'jhuntsman@applustech.com');

test('Employee class name property is correct', () => {
  expect(myEmployee.getName()).toBe('Jeremy');
});
