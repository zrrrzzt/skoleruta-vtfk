const { isVirkedag } = require('@alheimsins/virkedager')
const { dates, periods } = require('./get-fridager')
const today = new Date()

const isFreeDate = date => {
  return dates.includes(date.toISOString().substr(0, 10))
}

const isSkoledag = (date = today) => {
  const isDate = date instanceof Date
  if (!isDate) {
    throw new TypeError('You must input a date object')
  }
  return !isFreeDate(date) && isVirkedag(date)
}

module.exports = isSkoledag
