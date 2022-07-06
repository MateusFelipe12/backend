const contatosService = require('../services/contatosService');

const pegarContatos = async (req, res) => {
    try{
        const contato = await contatosService.pegarContatos();
        res.status(200).send(contato);
    } catch(erro) { 
        res.status(500).send(erro);
    }
}
const contatosId = async (req, res) => {
    try{
        const contato = await contatosService.contatosId(req.params);
        res.status(200).send(contato);
    } catch (erro) {
        res.status(500).send(erro);
    }
}

const postContatos = async (req, res) => {
    try{
        const contato = await contatosService.postContatos(req.body);
        res.status(201).send(contato);
    }   catch (erro) {
        res.status(500).send(erro);
    }
}

const patchContatos = async (req, res) => {
    try {
        const contato = await contatosService.patchContatos(req.body);
        res.status(201).send(contato);
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteContatos = async (req, res) => {
    try {
        let deletado = await contatosService.deleteContatos(req.params);
        let msg = deletado 
            ? `Contato ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum contato com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
    res.status(500).send(err);
    }
}


module.exports.pegarContatos = pegarContatos;
module.exports.contatosId = contatosId;
module.exports.postContatos = postContatos;
module.exports.patchContatos = patchContatos;
module.exports.deleteContatos = deleteContatos;