const Item = require('./Item')

console.log('Exemplo do Design Pattern Composite com itens do League of Legends xD')

let i1 = new Item('Amplifying Tome', 435)
let i2 = new Item('Faerie Charm', 250)
let i3 = new Item('Bandleglass Mirror', 950, [i1, i2])

let i4 = new Item('Ruby Crystal', 400)
let i5 = new Item('Kindlegem', 800, [i4])

let i6 = new Item('Moonstone Renewer', 2500, [i3, i5])


Item.print(1, i6)
