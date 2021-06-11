module.exports = class Item {
  constructor(name, price, children = []) {
    this._name = name
    this._price = price
    this._children = children
  }

  add(item) {
    this.children.push(item)
  }

  remove(item) {
    this.children = this.children.filter(c => c !== item)
  }

  getChild(i) {
    return this.children[i]
  }

  hasChildren() {
    return this.children.length > 0
  }

  static print(indent, node) {
    console.log(Array(indent++).join('--') + `${node.name} - ${node.price} gold`)
 
    for (let i = 0; i < node.children.length; ++i) {
      this.print(indent, node.getChild(i))
    }
  }

  set name(name) {
    this._name = name
  }

  get name() {
    return this._name
  }

  set price(price) {
    this._price = price
  }

  get price() {
    return this._price
  }

  set children(children) {
    this._children = children
  }

  get children() {
    return this._children
  }
}