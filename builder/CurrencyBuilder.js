const Currency = require('./Currency')

class CurrencyBuilder {
  constructor(name, iso) {
    this.name = name
    this.iso = iso
  }

  makeNational() {
    this.isNational = true
    return this
  }

  withQuotation(value) {
    this.quotation = value
    return this
  }

  build() {
    return new Currency(this)
  }
}

module.exports = CurrencyBuilder
