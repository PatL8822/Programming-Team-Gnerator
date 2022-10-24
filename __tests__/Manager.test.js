import { Manager } from '../lib/Manager.js';

const myManager = new Manager(
  'Jeremy Manager',
  1234,
  'jhuntsman@applustech.com',
  '253-261-7817'
);

test('Manager class name property is correct', () => {
  expect(myManager.getName()).toBe('Jeremy Manager');
});
