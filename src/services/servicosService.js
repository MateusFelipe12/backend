const db = require('../config/db');

//consultar o cliente
const pegarServicos = async () => {
    let sql = 'select * from servico';
    let servicos = await db.query(sql);
    return servicos.rows;
}

const servicosId = async (params) => {

    let sql = `select * from servico where id = $1`;
    let servicos = await db.query(sql, [params.id]);
    return servicos.rows;
}

const postServicos = async (params) => {
    let {descricao, valor, data, id_servicos_itens} = params;
    let sql =`insert into servico
    (
        descricao,
        valor, 
        data, 
        id_servicos_itens
    ) values($1, $2, $3, $4) returning id` ;
    let insert = await db.query(sql, [descricao, valor, data, id_servicos_itens])
    return insert.rows[0];
}

const patchServicos = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update servico set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

const deleteServicos = async (params) => {
    let sql = 'delete from servico where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
} 

module.exports.pegarServicos = pegarServicos;
module.exports.servicosId = servicosId;
module.exports.postServicos = postServicos;
module.exports.patchServicos = patchServicos;
module.exports.deleteServicos = deleteServicos;