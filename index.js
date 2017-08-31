const Koa = require('koa')
const koa = new Koa()

const poloniex = require('./lib/exchange/poloniex')
const bittrex  = require('./lib/exchange/bittrex')
const Bot      = require('./lib/bot')

const token = process.env.TOKEN

;(async function() {
  let b   = await bittrex.rest.init()
  let bot = new Bot({ events: b.events })
  let b2  = await bittrex.rest.start(b)
})()

// [+] laziness
// [+] Impatience !
// [+] HUBRIS     !!!
