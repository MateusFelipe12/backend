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

const postRegistrarServico = async (params) => {
//cria um novo servico
let {valorTotal, veiculo} = params;
let sqlServico =`insert into servicos_itens
(
    valor_total,
    id_veiculo
) values($1, $2) returning id` ;

let insert = await db.query(sqlServico, [valorTotal, veiculo])
let id_servicos_itens =  insert.rows[0].id;

//popula o servico com os itens
let {descricao, valorItem, data} = params
let sqlItens = 
    `insert into servico
    (descricao, valor, data, id_servicos_itens)
    values($1, $2, $3, $4) returning id`;
let res = await db.query(sqlItens,[descricao, valorItem, data, id_servicos_itens])
let id_servico = res.rows[0].id;

//popula pecas no servico
let {pecas} = params;
let sqlPecas = 
    `insert into pecas_servicos
    (id_servico, id_pecas)
    values ($1, $2) returning id`;
 await db.query(sqlPecas, [id_servico, pecas]);

let sqlReturn = `
select 
    si.id as servico,
    si.valor_total,
    si.id_veiculo as veiculo,
    s.descricao as descricao_servico,
    s.valor,
    s.data,
    p.descricao as peca
from servicos_itens as si
join servico as s on (si.id = s.id_servicos_itens)
join pecas_servicos as ps on (s.id = ps.id_servico)
join pecas as p on (p.id = ps.id_pecas)
where si.id = $1
`;

let response = await db.query(sqlReturn, [id_servicos_itens])
return response;

}

module.exports.pegarServicos = pegarServicos;
module.exports.servicosId = servicosId;
module.exports.postServicos = postServicos;
module.exports.patchServicos = patchServicos;
module.exports.deleteServicos = deleteServicos;
module.exports.postRegistrarServico = postRegistrarServico;