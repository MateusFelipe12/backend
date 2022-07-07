const db = require('../config/db');

//consultar o cliente
const pegarFornecedores = async () => {
    let sql = 'select * from fornecedores';
    let fornecedores = await db.query(sql);
    return fornecedores.rows;
}

const fornecedoresId = async (params) => {

    let sql = `select * from fornecedores where id = $1`;
    let fornecedores = await db.query(sql, [params.id]);
    return fornecedores.rows;
}


const postFornecedores = async (params) => {
    let {nome, razao_social, cnpj, inscricao_estadual, id_endereco, id_contato} = params;
    let sql =`insert into fornecedores 
    (
        nome,
        razao_social, 
        cnpj, 
        inscricao_estadual,
        id_endereco, 
        id_contato
    ) values($1, $2, $3, $4, $5, $6) returning id` ;
    let insert = await db.query(sql, [nome, razao_social, cnpj, inscricao_estadual, id_endereco, id_contato])
    return insert.rows[0];
}

const patchFornecedores = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update fornecedores set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

const deleteFornecedores = async (params) => {
    let sql = 'delete from fornecedores where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
} 

module.exports.pegarFornecedores = pegarFornecedores;
module.exports.fornecedoresId = fornecedoresId;
module.exports.postFornecedores = postFornecedores;
module.exports.patchFornecedores = patchFornecedores;
module.exports.deleteFornecedores = deleteFornecedores;