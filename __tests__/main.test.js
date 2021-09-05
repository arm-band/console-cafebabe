const consoleCafebabe = require('../');

test('console output', () => {
    expect(consoleCafebabe.coffee()).toBe(true);
});
