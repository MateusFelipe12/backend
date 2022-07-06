const enderecosClientesService = require('../services/enderecosClientesService');

const pegarEnderecosClientes = async (req, res) => {
    try{
        const enderecoClientes = await enderecosClientesService.pegarEnderecosClientes();
        res.status(200).send(enderecoClientes);
    } catch(erro) { 
        res.status(500).send(erro);
    }
}
const enderecosClientesId = async (req, res) => {
    try{
        const enderecoClientes = await enderecosClientesService.enderecosClientesId(req.params);
        res.status(200).send(enderecoClientes);
    } catch (erro) {
        res.status(500).send(erro);
    }
}

const postEnderecosClientes = async (req, res) => {
    try{
        const enderecoClientes = await enderecosClientesService.postEnderecosClientes(req.body);
        res.status(201).send(enderecoClientes);
    }   catch (erro) {
        res.status(500).send(erro);
    }
}

const patchEnderecosClientes = async (req, res) => {
    try {
        const enderecoClientes = await enderecosClientesService.patchEnderecosClientes(req.body);
        res.status(201).send(enderecoClientes);
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteEnderecosClientes = async (req, res) => {
    try {
        let deletado = await enderecosClientesService.deleteEnderecosClientes(req.params);
        let msg = deletado 
            ? `Endereco de cliente ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum endereco de cliente com o id ${req.params.id} para ser deletado`;
           
        res.status(200).send({ msg });
    } catch (err) {
    res.status(500).send(err);
    }
}


module.exports.pegarEnderecosClientes = pegarEnderecosClientes;
module.exports.enderecosClientesId = enderecosClientesId;
module.exports.postEnderecosClientes = postEnderecosClientes;
module.exports.patchEnderecosClientes = patchEnderecosClientes;
module.exports.deleteEnderecosClientes = deleteEnderecosClientes;