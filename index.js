import {variaveis} from './variaveis.js';
import {logicos} from './logicos.js';
import {estruturaCase} from './case.js';
import {relacionais} from './relacionais.js';
import {vetor} from './vetor.js';
import {loop} from './loop.js';
import {ifElse} from './if-else.js';
import { aritmeticos } from './aritmeticos.js';
import express from 'express'
import nodemon from 'nodemon';



const app = express()




//params: ---------------------------------------------------------------------------------------------------------
app.get('/variaveis/:nome/:idade', (req, res) => {
    let variavel = variaveis(req.params.nome, req.params.idade);
    res.send("variaveis " + variavel)
})

app.get('/logicos/:nota', (req, res) => {
    let nota = parseFloat(req.params.nota);
    res.send('exercicio: logico ' + logicos(nota))
})

app.get('/switchCase/:opcao', (req, res) => {
    let opcao = parseInt(req.params.opcao);
    res.send('exercicio: estrutura case ' + estruturaCase(opcao))
})

app.get('/aritmeticos/:a/:b', (req, res) => {
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    res.send('exercicio: numeros aritmeticos ' + aritmeticos(a, b))
})

app.get('/loop', (req, res) => {
    res.send('exercicio: loop' + loop)
})


app.get('/ifElse/:n1', (req, res) => {
    let nota = parseFloat(req.params.n1);
    res.send('Exercicio: if else ' + '<br><br>' + ifElse(nota))
})


app.get('/relacionais/:a/:b', (req, res) => {
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    res.send('exercicio: relacionais ' + relacionais(a, b))
})

app.get('/vetor', (req, res) => {
    res.send('exercicio: vetor ' + vetor())
})






//queryString: --------------------------------------------------------------------------------------------------------
app.get('/variaveis', (req, res) => {
    // Obtendo os parâmetros da query string
    const nome = req.query.nome; // Exemplo: ?nome=Joao
    const idade = req.query.idade; // Exemplo: ?idade=25

    // Passando os parâmetros para a função variaveis
    let variavel = variaveis(nome, idade);

    // Respondendo com os dados processados
    res.send(`variaveis: Nome = ${nome}, Idade = ${idade}`);
});

app.get('/logicos', (req, res) => {
    const nota = parseFloat(req.query.nota); 
    let resultado = logicos(nota);
    res.send('exercicio: logico ' + resultado)
})

app.get('/switchCase', (req, res) => {
    const opcao = parseInt(req.query.opcao);
    let resultado = estruturaCase(opcao);
    res.send('exercicio: estrutura case ' + resultado)  
})


app.get('/aritmeticos', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    let resultado = aritmeticos(a, b);
    res.send('exercicio: numeros aritmeticos ' + aritmeticos(a, b))
})


app.get('/loop', (req, res) => {
    const loop = loop();
    let resultado = loop;
    res.send('exercicio: loop ' + resultado)
})


app.get('/ifElse', (req, res) => {
    const nota = parseFloat(req.query.n1);
    let resultado = ifElse(nota);
    res.send('Exercicio: if else ' + '<br><br>' + resultado)
})

app.get('/relacionais', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    let resultado = relacionais(a, b);
    res.send('exercicio: relacionais ' + resultado)
})

app.get('/vetor', (req, res) => {
    const vetor = vetor();
    let resultado = vetor;
    res.send('exercicio: vetor ' + resultado)  
})



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
  })

