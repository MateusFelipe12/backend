const servicosService = require('../services/servicosService');

const pegarServicos = async (req, res) => {
    try{
        const servicos = await servicosService.pegarServicos();
        res.status(200).send(servicos);
    } catch(erro) { 
        res.status(500).send(erro);
    }
}
const servicosId = async (req, res) => {
    try{
        const servicos = await servicosService.servicosId(req.params);
        res.status(200).send(servicos);
    } catch (erro) {
        res.status(500).send(erro);
    }
}

const postServicos = async (req, res) => {
    try{
        const servicos = await servicosService.postServicos(req.body);
        res.status(201).send(servicos);
    }   catch (erro) {
        res.status(500).send(erro);
    }
}

const patchServicos = async (req, res) => {
    try {
        const servicos = await servicosService.patchServicos(req.body);
        res.status(201).send(servicos);
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteServicos = async (req, res) => {
    try {
        let deletado = await servicosService.deleteServicos(req.params);
        let msg = deletado 
            ? `Servico ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum Servico com o id ${req.params.id} para ser deletado`;
           
        res.status(200).send({ msg });
    } catch (err) {
    res.status(500).send(err);
    }
}


module.exports.pegarServicos = pegarServicos;
module.exports.servicosId = servicosId;
module.exports.postServicos = postServicos;
module.exports.patchServicos = patchServicos;
module.exports.deleteServicos = deleteServicos;