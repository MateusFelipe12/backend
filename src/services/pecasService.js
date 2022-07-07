const db = require('../config/db');

//consultar o cliente
const pegarPecas = async () => {
    let sql = 'select * from pecas';
    let pecas = await db.query(sql);
    return pecas.rows;
}

const pecasId = async (params) => {

    let sql = `select * from pecas where id = $1`;
    let pecas = await db.query(sql, [params.id]);
    return pecas.rows;
}


const postPecas = async (params) => {
    let {descricao, valor_custo, margem_solicitada, valor_venda, estoque, id_fornecedor} = params;
    let sql =`insert into pecas 
    (
        descricao,
        valor_custo,
        margem_solicitada,
        valor_venda,
        estoque,
        id_fornecedor
    ) values($1, $2, $3, $4, $5, $6) returning id` ;
    let insert = await db.query(sql, [descricao, valor_custo, margem_solicitada, valor_venda, estoque, id_fornecedor])
    return insert.rows[0];
}

const patchPecas = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update pecas set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

const deletePecas = async (params) => {
    let sql = 'delete from pecas where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
} 

module.exports.pegarPecas = pegarPecas;
module.exports.pecasId = pecasId;
module.exports.postPecas = postPecas;
module.exports.patchPecas = patchPecas;
module.exports.deletePecas = deletePecas;