const { isVirkedag } = require('@alheimsins/virkedager')
const { dates, periods } = require('./get-fridager')
const today = new Date()

const isNotFreeDate = date => {
  return !dates.includes(date.toISOString().substr(0, 10))
}

const isNotFreePeriod = date => {
  const checkedPeriods = periods.reduce((result, current) => {
    const { start, end } = current
    const startDate = new Date(start)
    const endDate = new Date(end)
    const isInPeriod = date >= startDate && date <= endDate
    result.push(isInPeriod)
    return result
  }, [])
  return !checkedPeriods.includes(true)
}

const isSkoledag = (date = today) => {
  const isDate = date instanceof Date
  if (!isDate) {
    throw new TypeError('You must input a date object')
  }
  const dateToCheck = new Date(date.toISOString().substr(0, 10))
  return isNotFreeDate(dateToCheck) && isNotFreePeriod(dateToCheck) && isVirkedag(dateToCheck)
}

module.exports = isSkoledag
