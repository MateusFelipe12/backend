const db = require('../config/db');

//consultar o cliente
const pegarContatos = async () => {
    let sql = 'select * from contatos';
    let contatos = await db.query(sql);
    return contatos.rows;
}

const contatosId = async (params) => {

    let sql = `select * from contatos where id = $1`;
    let contato = await db.query(sql, [params.id]);
    return contato.rows;
}


const postContatos = async (params) => {
    let {telefone, celular, email} = params;
    let sql =`insert into contatos 
    (
        telefone,
        celular,
        email
    ) values($1, $2, $3) returning id` ;
    let insert = await db.query(sql, [telefone, celular, email])
    return insert.rows[0];
}

const patchContatos = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update contatos set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

const deleteContatos = async (params) => {
    let sql = 'delete from contatos where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
} 

module.exports.pegarContatos = pegarContatos;
module.exports.contatosId = contatosId;
module.exports.postContatos = postContatos;
module.exports.patchContatos = patchContatos;
module.exports.deleteContatos = deleteContatos;