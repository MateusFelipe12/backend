const enderecosController = require('../controllers/enderecosController');

module.exports = (app) => {
    app.get('/enderecos', enderecosController.pegarEnderecos);
    app.get('/enderecos/:id', enderecosController.enderecosId);
    app.post('/enderecos/novo', enderecosController.postEnderecos);
    app.patch('/enderecos', enderecosController.patchEnderecos);
    app.delete('/enderecos/:id', enderecosController.deleteEnderecos);
}