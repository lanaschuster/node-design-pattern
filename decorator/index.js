const Account = require('./Account')
const FreemiumAccount = require('./FreemiumAccount')
const PremiumAccount = require('./PremiumAccount')

let a1 = new Account()
let fa1 = new FreemiumAccount(a1)

let a2 = new Account('ANUAL')
let pa2 = new PremiumAccount(a2)


a1.print()
fa1.print()

a2.print()
pa2.print()