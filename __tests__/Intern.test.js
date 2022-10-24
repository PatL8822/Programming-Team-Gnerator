import { Intern } from '../lib/Intern.js';

const myIntern = new Intern(
  'Jeremy Intern',
  1234,
  'jhuntsman@applustech.com',
  'University of Washington'
);

test('Intern class name property is correct', () => {
  expect(myIntern.getName()).toBe('Jeremy Intern');
});
