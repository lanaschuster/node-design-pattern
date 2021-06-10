const ViaCepProxy = require('./ViaCepProxy')

// CEP do Paraná
ViaCepProxy.findByCep('80010010', result => {
  console.log(result)
})

// CEP de São Paulo
ViaCepProxy.findByCep('01001000', result => {
  console.log(result)
})
