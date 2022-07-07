const pecasService = require('../services/pecasService');

const pegarPecas = async (req, res) => {
    try{
        const pecas = await pecasService.pegarPecas();
        res.status(200).send(pecas);
    } catch(erro) { 
        res.status(500).send(erro);
    }
}
const pecasId = async (req, res) => {
    try{
        const pecas = await pecasService.pecasId(req.params);
        res.status(200).send(pecas);
    } catch (erro) {
        res.status(500).send(erro);
    }
}

const postPecas = async (req, res) => {
    try{
        const pecas = await pecasService.postPecas(req.body);
        res.status(201).send(pecas);
    }   catch (erro) {
        res.status(500).send(erro);
    }
}

const patchPecas = async (req, res) => {
    try {
        const pecas = await pecasService.patchPecas(req.body);
        res.status(201).send(pecas);
    } catch (err) {
        res.status(500).send(err);
    }
}

const deletePecas = async (req, res) => {
    try {
        let deletado = await pecasService.deletePecas(req.params);
        let msg = deletado 
            ? `Fornecedor ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum fornecedor com o id ${req.params.id} para ser deletado`;
           
        res.status(200).send({ msg });
    } catch (err) {
    res.status(500).send(err);
    }
}


module.exports.pegarPecas = pegarPecas;
module.exports.pecasId = pecasId;
module.exports.postPecas = postPecas;
module.exports.patchPecas = patchPecas;
module.exports.deletePecas = deletePecas;