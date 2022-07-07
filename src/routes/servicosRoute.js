const servicosController = require('../controllers/servicosController');

module.exports = (app) => {
    app.get('/servicos', servicosController.pegarServicos);
    app.get('/servicos/:id', servicosController.servicosId);
    app.post('/servicos/novo', servicosController.postServicos);
    app.post('/servicos/registrar', servicosController.postRegistrarServico);
    app.patch('/servicos', servicosController.patchServicos);
    app.delete('/servicos/:id', servicosController.deleteServicos);
}