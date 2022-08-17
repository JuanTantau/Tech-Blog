// format_date() takes Date() objects and returns dates in MM/DD/YYYY
const {format_date} = require('../utils/helpers')
test('format_date() returns a date string', () => {
    const date = new Date('');
    
    expect(format_date(date)).toBe('');
});