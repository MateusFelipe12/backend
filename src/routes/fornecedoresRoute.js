const fornecedoresController = require('../controllers/fornecedoresController');

module.exports = (app) => {
    app.get('/fornecedores', fornecedoresController.pegarFornecedores);
    app.get('/fornecedores/:id', fornecedoresController.fornecedoresId);
    app.post('/fornecedores/novo', fornecedoresController.postFornecedores);
    app.patch('/fornecedores', fornecedoresController.patchFornecedores);
    app.delete('/fornecedores/:id', fornecedoresController.deleteFornecedores);
}