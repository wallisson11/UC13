import carros2024 from './tabelacarros.js';
import express from 'express';

const app = express();

app.use(express.json());

app.get('/',(requisicao, resposta) => { 
    resposta.status(200).send(carros2024);
});

app.get('/:sigla',(requisicao, resposta) => {
    const siglaInformada = requisicao.params.sigla.toUpperCase();
    const carro = carros2024.find((infoCarro) => infoCarro.sigla === siglaInformada); // Buscando o carro pela Sigla 
    if (!carro) {
        // ! Vazio Not
        resposta
        .status
        .send(
            'Não existe um carro com a sigla informada!' //Mensagem de Carro
        );
        return;
    }
    resposta.status(200).send(carro); //se encontrado a sigla a resposta correta
    app.post('/', (req, res) => {
        const novoCarro = req.body; //Adiciona o corpo enviado para incluir um carro
        carros2024.push(novoCarro); //Adiciona o novo carro a lista de carros.
        res.status(200).send(novoCarro); //Retorna o carro adicionado com status 200(ok).
    })
})

// Inicia o servidor na porta 3000:
// http://localhost:3000/
app.listen(3000,() => console.log("Servidor Rodando com Sucesso"));