const Chocolate = require('./Chocolate')
const Lollipop = require('./Lollipop')

const logger = require('../singleton/Logger')

const CandyType = {
  CHOCOLATE: 'Chocolate',
  LOLLIPOP: 'Pirulito'
}

class CandyFactory {
  create(type) {
    if (type === CandyType.CHOCOLATE) {
      return new Chocolate()

    } else if (type === CandyType.LOLLIPOP) {
      return new Lollipop()
      
    } else {
      logger.log(`Unknown candy: ${type}`)
    }
  }
}

module.exports = new CandyFactory()
