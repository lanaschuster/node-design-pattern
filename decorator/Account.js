module.exports = class Account {
  constructor(type = 'MENSALISTA', price = 0.00) {
    this.type = type
    this.price = price
  }

  print() {
    console.log('Free account: ')
    console.log(JSON.stringify(this))
  }
}
