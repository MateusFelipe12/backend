const veiculosService = require('../services/veiculosServices');

const pegarVeiculos = async (req, res) => {
    try{
        const veiculos = await veiculosService.pegarVeiculos();
        res.status(200).send(veiculos);
    } catch(erro) { 
        res.status(500).send(erro);
    }
}
const veiculosId = async (req, res) => {
    try{
        const veiculos = await veiculosService.veiculosId(req.params);
        res.status(200).send(veiculos);
    } catch (erro) {
        res.status(500).send(erro);
    }
}

const postVeiculos = async (req, res) => {
    try{
        const veiculos = await veiculosService.postVeiculos(req.body);
        res.status(201).send(veiculos);
    }   catch (erro) {
        res.status(500).send(erro);
    }
}

const patchVeiculos = async (req, res) => {
    try {
        const veiculos = await veiculosService.patchVeiculos(req.body);
        res.status(201).send(veiculos);
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteVeiculos = async (req, res) => {
    try {
        let deletado = await veiculosService.deleteVeiculos(req.params);
        let msg = deletado 
            ? `veiculos ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum veiculos com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
    res.status(500).send(err);
    }
}


module.exports.pegarVeiculos = pegarVeiculos;
module.exports.veiculosId = veiculosId;
module.exports.postVeiculos = postVeiculos;
module.exports.patchVeiculos = patchVeiculos;
module.exports.deleteVeiculos = deleteVeiculos;