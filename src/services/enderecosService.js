const db = require('../config/db');

//consultar o cliente
const pegarEnderecos = async () => {
    let sql = 'select * from enderecos';
    let enderecos = await db.query(sql);
    return enderecos.rows;
}

const enderecosId = async (params) => {

    let sql = `select * from enderecos where id = $1`;
    let endereco = await db.query(sql, [params.id]);
    return endereco.rows;
}


const postEnderecos = async (params) => {
    let {cidade, cep, bairro, rua, numero} = params;
    let sql =`insert into enderecos 
    (
        cidade,
        cep, 
        bairro, 
        rua, 
        numero
    ) values($1, $2, $3, $4, $5) returning id` ;
    let insert = await db.query(sql, [cidade, cep, bairro, rua, numero])
    return insert.rows[0];
}

const patchEnderecos = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update enderecos set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

const deleteEnderecos = async (params) => {
    let sql = 'delete from enderecos where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
} 

module.exports.pegarEnderecos = pegarEnderecos;
module.exports.enderecosId = enderecosId;
module.exports.postEnderecos = postEnderecos;
module.exports.patchEnderecos = patchEnderecos;
module.exports.deleteEnderecos = deleteEnderecos;