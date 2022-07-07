const db = require('../config/db');

//consultar o cliente
const pegarVeiculos = async () => {
    let sql = 'select * from veiculos';
    let veiculos = await db.query(sql);
    return veiculos.rows;
}

const veiculosId = async (params) => {

    let sql = `select * from veiculos where id = $1`;
    let veiculos = await db.query(sql, [params.id]);
    return veiculos.rows;
}

const postVeiculos = async (params) => {
    let { placa, marca, modelo, ano, id_proprietario} = params;
    let sql =`insert into veiculos
    (
        placa,
        marca,
        modelo,
        ano,
        id_proprietario
    ) values($1, $2, $3, $4, $5) returning id` ;
    let insert = await db.query(sql, [placa, marca, modelo, ano, id_proprietario])
    return insert.rows[0];
}

const patchVeiculos = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update veiculos set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

const deleteVeiculos = async (params) => {
    let sql = 'delete from veiculos where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
} 

module.exports.pegarVeiculos = pegarVeiculos;
module.exports.veiculosId = veiculosId;
module.exports.postVeiculos = postVeiculos;
module.exports.patchVeiculos = patchVeiculos;
module.exports.deleteVeiculos = deleteVeiculos;