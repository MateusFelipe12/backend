const pecasController = require('../controllers/pecasController');

module.exports = (app) => {
    app.get('/pecas', pecasController.pegarPecas);
    app.get('/pecas/:id', pecasController.pecasId);
    app.post('/pecas/novo', pecasController.postPecas);
    app.patch('/pecas', pecasController.patchPecas);
    app.delete('/pecas/:id', pecasController.deletePecas);
}