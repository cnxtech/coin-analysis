const Koa = require('koa')
const koa = new Koa()

const poloniex = require('./lib/exchange/poloniex')
const bittrex = require('./lib/exchange/bittrex');

(async function() {
  let b = await bittrex.rest.init()
  let b2 = await bittrex.rest.start(b)
})()
