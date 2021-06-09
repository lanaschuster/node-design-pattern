const bcrypt = require('bcrypt')

class EncoderAdapter {
  constructor(saltRounds = 12) {
    this._saltRounds = saltRounds
  }

  get saltRounds() {
    return this._saltRounds
  }

  encode(str, callback) {
    bcrypt.genSalt(this.saltRounds, function(err, salt) {
      bcrypt.hash(str, salt, function(err, hash) {
        if (err) throw new Error(err.message)
        callback(hash)
      })
    })
  }

  matches(str, hash, callback) {
    bcrypt.compare(str, hash, function(err, result) {
      if (err) throw new Error(err.message)
      callback(result)
    })
  }
}

module.exports = EncoderAdapter
