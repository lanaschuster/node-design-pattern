module.exports = class PremiumAccount {
  constructor(account) {
    this.type = account.type
    this.price = account.type === 'MENSALISTA' ? 2.99 : 30.00
    this.extraContent = true
  }

  print() {
    console.log('Premium account: ')
    console.log(JSON.stringify(this))
  }
}
