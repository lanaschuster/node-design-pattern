const ViaCepService = require('./ViaCepService')

class ViaCepProxy {
  constructor() {}

  findByCep(cep, callback) {
    ViaCepService.findByCep(cep, result => {
      if (result.uf != 'PR') {
        throw new Error('Não é possível consultar CEP não pertencente ao Paraná.')
      }

      callback(result)
    })
  }
}

module.exports = new ViaCepProxy()
