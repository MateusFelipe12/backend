
const clientes = require('./clientesRoute');
const enderecos = require('./enderecosRoute');
const contatos = require('./contatosRoute');
const enderecos_clientes = require('./enderecosClientesRoute');

module.exports = (app) => {
    clientes(app);
    enderecos(app);
    contatos(app);
    enderecos_clientes(app);
}