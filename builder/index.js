const CurrencyBuilder = require('./CurrencyBuilder')

const logger = require('../singleton/Logger')

const brl = new CurrencyBuilder('Real', 'BRL').makeNational().build()
const usd = new CurrencyBuilder('Dólar', 'USD').withQuotation(5.36).build()
const eur = new CurrencyBuilder('Euro', 'EUR').withQuotation(6.33).build()

logger.log(brl.toString())
logger.log(usd.toString())
logger.log(eur.toString())
