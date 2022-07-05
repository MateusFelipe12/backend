const clientesController = require('../controllers/clientesController');

module.exports = (app) => {
    app.get('/clientes', clientesController.pegarClientes);
    app.get('/clientes/:id', clientesController.clientesId);
    app.post('/clientes/novo', clientesController.postClientes);
    app.patch('/clientes', clientesController.patchCliente);
    app.delete('/clientes/:id', clientesController.deleteCliente);
}