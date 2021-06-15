module.exports = class FreemiumAccount {
  constructor(account) {
    this.type = account.type
    this.price = account.type === 'MENSALISTA' ? 0.99 : 10.00
  }

  print() {
    console.log('Freemium account: ')
    console.log(JSON.stringify(this))
  }
}
