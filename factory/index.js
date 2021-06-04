const CandyFactory = require('./CandyFactory')

let chocolate = CandyFactory.create('Chocolate')
let lollipop = CandyFactory.create('Pirulito')
let rapadura = CandyFactory.create('Rapadura')

chocolate.show()
lollipop.show()
