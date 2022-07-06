const db = require('../config/db');

//consultar o cliente
const pegarEnderecosClientes = async () => {
    let sql = 'select * from enderecos_clientes';
    let enderecosClientes = await db.query(sql);
    return enderecosClientes.rows;
}

const enderecosClientesId = async (params) => {

    let sql = `select * from enderecos_clientes where id = $1`;
    let enderecosCliente = await db.query(sql, [params.id]);
    return enderecosCliente.rows;
}


const postEnderecosClientes = async (params) => {
    let {id, id_enderecos} = params;
    let sql =`insert into enderecos_clientes 
    (
        id,
        id_enderecos
    ) values($1, $2) returning id` ;
    let insert = await db.query(sql, [id, id_enderecos])
    return insert.rows[0];
}

const patchEnderecosClientes = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update enderecos_clientes set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

const deleteEnderecosClientes = async (params) => {
    let sql = 'delete from enderecos_clientes where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
} 

module.exports.pegarEnderecosClientes = pegarEnderecosClientes;
module.exports.enderecosClientesId = enderecosClientesId;
module.exports.postEnderecosClientes = postEnderecosClientes;
module.exports.patchEnderecosClientes = patchEnderecosClientes;
module.exports.deleteEnderecosClientes = deleteEnderecosClientes;