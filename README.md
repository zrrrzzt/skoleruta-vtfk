[![Build Status](https://travis-ci.com/zrrrzzt/skoleruta-vtfk.svg?branch=main)](https://travis-ci.com/zrrrzzt/skoleruta-vtfk)
[![Coverage Status](https://coveralls.io/repos/zrrrzzt/skoleruta-vtfk/badge.svg?branch=main&service=github)](https://coveralls.io/github/zrrrzzt/skoleruta-vtfk?branch=main)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# skoleruta-vtfk

Skoleruta for Vestfold og Telemark fylkeskommune

## Usage

Returns true if given date is a schoolday.

```JavaScript
const  { isSkoledag } = require('skoleruta-vtfk')
const date = new Date('2020-10-05')
console.log(isSkoledag(date)) //=> false
```

# License

[MIT](LICENSE)
