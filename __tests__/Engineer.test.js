import { Engineer } from '../lib/Engineer.js';

const myEngineer = new Engineer(
  'Jeremy Engineer',
  1234,
  'jhuntsman@applustech.com',
  'https://github.com/PatL8822'
);

test('Engineer class name property is correct', () => {
  expect(myEngineer.getName()).toBe('Jeremy Engineer');
});
