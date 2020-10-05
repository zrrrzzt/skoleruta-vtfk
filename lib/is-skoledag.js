const { isVirkedag } = require('@alheimsins/virkedager')
const today = new Date()

const isSkoledag = (date = today) => {
  const isDate = date instanceof Date
  if (!isDate) {
    throw new TypeError('You must input a date object')
  }
  return date.toISOString().substr(0, 10) !== '2021-03-09' && isVirkedag(date)
}

module.exports = isSkoledag
