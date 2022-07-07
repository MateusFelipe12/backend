const veiculosController = require('../controllers/veiculosController');

module.exports = (app) => {
    app.get('/veiculos', veiculosController.pegarVeiculos);
    app.get('/veiculos/:id', veiculosController.veiculosId);
    app.post('/veiculos/novo', veiculosController.postVeiculos);
    app.patch('/veiculos', veiculosController.patchVeiculos);
    app.delete('/veiculos/:id', veiculosController.deleteVeiculos);
}