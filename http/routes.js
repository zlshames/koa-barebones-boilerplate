import MainController from './controllers/MainController'

module.exports = (router) => {
  router.post('/api/v1/find', MainController.handle)
}
