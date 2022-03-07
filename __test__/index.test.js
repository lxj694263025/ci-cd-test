const hello = require('../index');

describe('default export', () => {
  test('to be undefined', () => {
    expect(hello()).toBeUndefined();
  });
});
