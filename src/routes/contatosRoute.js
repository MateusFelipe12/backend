const contatosController = require('../controllers/contatosController');

module.exports = (app) => {
    app.get('/contatos', contatosController.pegarContatos);
    app.get('/contatos/:id', contatosController.contatosId);
    app.post('/contatos/novo', contatosController.postContatos);
    app.patch('/contatos', contatosController.patchContatos);
    app.delete('/contatos/:id', contatosController.deleteContatos);
}