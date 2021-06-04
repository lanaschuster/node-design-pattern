class Currency {
  constructor(builder) {
    this.name = builder.name
    this.osi = builder.osi
    this.isNational = builder.isNational
    this.quotation = builder.quotation || 1
  }

  toString() {
    return JSON.stringify(this)
  }
}

module.exports = Currency
