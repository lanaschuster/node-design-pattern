const EncoderAdapter = require('./EncoderAdapter')

try {
  let encoderAdapter = new EncoderAdapter()
  encoderAdapter.encode('segredo', (hash) => {
    console.log('hash: ' + hash)

    encoderAdapter.matches('secret', hash, result => {
      console.log(result)
    })

    encoderAdapter.matches('segredo', hash, result => {
      console.log(result)
    })
  })

} catch (err) {
  console.log(err)
}
