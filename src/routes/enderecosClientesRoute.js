const enderecosClientesController = require('../controllers/enderecosClientesController');

module.exports = (app) => {
    app.get('/enderecos-clientes', enderecosClientesController.pegarEnderecosClientes);
    app.get('/enderecos-clientes/:id', enderecosClientesController.enderecosClientesId);
    app.post('/enderecos-clientes/novo', enderecosClientesController.postEnderecosClientes);
    app.patch('/enderecos-clientes', enderecosClientesController.patchEnderecosClientes);
    app.delete('/enderecos-clientes/:id', enderecosClientesController.deleteEnderecosClientes);
}