function reload(module){
  delete require.cache[require.resolve(module)]
  return require(module)
}

global.reload   = reload
global.rl       = reload
global.cl       = console.log

global.Promise  = require('bluebird')
global.Lazy     = require('lazy.js')
global.Influx   = require('influx')
global.moment   = require('moment')
global.sprintf  = require('sprintf')
global.winston  = require('winston')
global.outdent  = require('outdent')
global.talib    = require('talib')

global.immutable = require('immutable')

global.helpers  = require('./lib/helpers')
global.h        = helpers
global.hp       = helpers.percentChange
global.hpa      = helpers.percentAdd
global.hb       = helpers.breakEven
global.exchange = require('./lib/exchange')
global.analysis = require('./lib/analysis')
global.Bot      = require('./lib/bot')
global.db       = require('./lib/db')

global.bot = new Bot()
