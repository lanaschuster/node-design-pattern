const hamburguerFastFood = require('./HamburguerFastFood.prototype')

const logger = require('../singleton/Logger')

let burguerKing = hamburguerFastFood.clone() 
burguerKing.name = 'Burguer King'
burguerKing.addItemToShoppingList('Bacon')

let mcDonalds = hamburguerFastFood.clone()
mcDonalds.name = 'McDonalds'
mcDonalds.addItemToShoppingList('Picles')

logger.log(`${burguerKing.name}: ${burguerKing.shoppingList}`)
logger.log(`${mcDonalds.name}: ${mcDonalds.shoppingList}`)
