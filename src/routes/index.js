
const clientes = require('./clientesRoute');
const enderecos = require('./enderecosRoute');
const contatos = require('./contatosRoute');
const enderecos_clientes = require('./enderecosClientesRoute');
const fornecedor = require('./fornecedoresRoute');
const pecas = require('./pecasRoute');
const servicos = require('./servicosRoute');
const veiculos = require('./veiculosRoute')

module.exports = (app) => {
    clientes(app);
    enderecos(app);
    contatos(app);
    enderecos_clientes(app);
    fornecedor(app);
    pecas(app);
    servicos(app);
    veiculos(app);
}