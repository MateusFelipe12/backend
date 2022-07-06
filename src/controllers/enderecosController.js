const enderecosService = require('../services/enderecosService');

const pegarEnderecos = async (req, res) => {
    try{
        const endereco = await enderecosService.pegarEnderecos();
        res.status(200).send(endereco);
    } catch(erro) { 
        res.status(500).send(erro);
    }
}
const enderecosId = async (req, res) => {
    try{
        const endereco = await enderecosService.enderecosId(req.params);
        res.status(200).send(endereco);
    } catch (erro) {
        res.status(500).send(erro);
    }
}

const postEnderecos = async (req, res) => {
    try{
        const endereco = await enderecosService.postEnderecos(req.body);
        res.status(201).send(endereco);
    }   catch (erro) {
        res.status(500).send(erro);
    }
}

const patchEnderecos = async (req, res) => {
    try {
        const endereco = await enderecosService.patchEnderecos(req.body);
        res.status(201).send(endereco);
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteEnderecos = async (req, res) => {
    try {
        let deletado = await enderecosService.deleteEnderecos(req.params);
        let msg = deletado 
            ? `Endereco ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum endereco com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
    res.status(500).send(err);
    }
}


module.exports.pegarEnderecos = pegarEnderecos;
module.exports.enderecosId = enderecosId;
module.exports.postEnderecos = postEnderecos;
module.exports.patchEnderecos = patchEnderecos;
module.exports.deleteEnderecos = deleteEnderecos;