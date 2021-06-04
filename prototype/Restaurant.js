class Restaurant {
  constructor(name = 'unknown') {
    this._name = name
    this._shoppingList = []
  }

  set name(name) {
    this._name = name
  }

  get name() {
    return this._name
  }

  get shoppingList() {
    return this._shoppingList
  }

  addItemToShoppingList(item) {
    this._shoppingList.push(item)
  }

  clone() {
    let proto = Object.getPrototypeOf(this)
    let cloned = Object.create(proto)

    cloned._name = this._name
    cloned._shoppingList = [...this._shoppingList]

    return cloned
  }
}

module.exports = Restaurant
