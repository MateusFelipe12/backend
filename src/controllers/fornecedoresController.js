const fornecedoresService = require('../services/fornecedoresService');

const pegarFornecedores = async (req, res) => {
    try{
        const fornecedores = await fornecedoresService.pegarFornecedores();
        res.status(200).send(fornecedores);
    } catch(erro) { 
        res.status(500).send(erro);
    }
}
const fornecedoresId = async (req, res) => {
    try{
        const fornecedores = await fornecedoresService.fornecedoresId(req.params);
        res.status(200).send(fornecedores);
    } catch (erro) {
        res.status(500).send(erro);
    }
}

const postFornecedores = async (req, res) => {
    try{
        const fornecedores = await fornecedoresService.postFornecedores(req.body);
        res.status(201).send(fornecedores);
    }   catch (erro) {
        res.status(500).send(erro);
    }
}

const patchFornecedores = async (req, res) => {
    try {
        const fornecedores = await fornecedoresService.patchFornecedores(req.body);
        res.status(201).send(fornecedores);
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteFornecedores = async (req, res) => {
    try {
        let deletado = await fornecedoresService.deleteFornecedores(req.params);
        let msg = deletado 
            ? `Fornecedor ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum fornecedor com o id ${req.params.id} para ser deletado`;
           
        res.status(200).send({ msg });
    } catch (err) {
    res.status(500).send(err);
    }
}


module.exports.pegarFornecedores = pegarFornecedores;
module.exports.fornecedoresId = fornecedoresId;
module.exports.postFornecedores = postFornecedores;
module.exports.patchFornecedores = patchFornecedores;
module.exports.deleteFornecedores = deleteFornecedores;