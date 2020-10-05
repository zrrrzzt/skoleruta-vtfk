const test = require('ava')

test('it returns a list of dates', t => {
  const { dates } = require('./get-fridager')
  t.truthy(dates, 'dates okay')
})

test('it returns a list of periods', t => {
  const { periods } = require('./get-fridager')
  t.truthy(periods, 'periods okay')
})
