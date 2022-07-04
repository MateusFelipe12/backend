//PRIMEIRO PASSO É IMPORTAR A DEPENDENCIA DO EXPRESS PARA A CRIACAO DO SERVIDOR
const express = require ('express');

//CRIAR UMA CONST QUE REPRESENTA NOSSA APLICACAO COMO UM TODO
//VAMOS CHAMALA DE "app" E ELA RECEBE A INVOCACAODO EXPRESS
const app = express();
const db = require('./config/db');

//CRIACAO DE ROTA que vai listar os cadastros
app.get('/clientes', async (req, res) => {
    const sql = 'select * from clientes ';
    const clientes = await db.query(sql);
    res.status(200).send({
        quantidade:  clientes.rowCount,
        dados: clientes.rows
    });
})


//DEFINE-SE EM QUAL PORTA A APLICACAO VAI RODAR, PARA ISSO USAMOS A FUNCAO
// .listen(PORT, CALLBACK FUNCTION)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});