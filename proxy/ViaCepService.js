const https = require('https')

class ViaCepService {
  constructor() {}

  findByCep(cep, callback) {
    let options = {
      hostname: `viacep.com.br`,
      path: `/ws/${cep}/json/`,
      port: 443,
      method: 'GET'
    }
    
    let req = https.request(options, res => {
      let content = ''
    
      res.on('data', function (chunk) {
        content += chunk;
      })
    
      res.on('end', function () {
        callback(JSON.parse(content))
      })
    })
    
    req.on('error', error => {
      console.error(error)
    })
    
    req.end()
  }
}

module.exports = new ViaCepService()
