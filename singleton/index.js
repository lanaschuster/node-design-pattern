const logger = require('./Logger')

logger.log('Iniciando aplicação...')
logger.log('Essa aplicação é um simples exemplo do Design Pattern Singleton, aplicado na classe Logger.')

setTimeout(() => {
  logger.log('Encerrando aplicação.')
}, 3000)
