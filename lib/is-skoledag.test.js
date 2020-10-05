const test = require('ava')
const isSkoledag = require('./is-skoledag')

test('it needs a date object', t => {
  const today = 'date'
  const error = t.throws(() => {
		isSkoledag(today)
	}, {instanceOf: TypeError})

	t.is(error.message, 'You must input a date object')
})

test('it uses today if no input is given', t => {
  t.is(isSkoledag(), true, 'Today is okay')
})

test('it returns true for monday 28. september 2020', t => {
  const today = new Date('2020-09-28')
  t.is(isSkoledag(today), true, 'september 28. is okay')
})

test('it returns false for sunday 27. september 2020', t => {
  const today = new Date('2020-09-27')
  t.is(isSkoledag(today), false, 'september 27. is okay')
})

test('it returns false for 9. march 2020', t => {
  const today = new Date('2020-03-09')
  t.is(isSkoledag(today), false, '9. march ok')
})