class Candy {
  constructor(name = 'candy', icon = '\u{1F36C}') {
    this._name = name
    this._icon = icon
  }

  set name(name) {
    this._name = name
  }

  get name() {
    return this._name
  }

  set icon(icon) {
    this._icon = icon
  }

  get icon() {
    return this._icon
  }

  show() {
    console.log(`${this.icon} ${this.name}`)
  }
}

module.exports = Candy
