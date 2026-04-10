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

app.get('/logicos', (req, res) => {
    res.send('exercicio: logico ' + logicos())
})

app.get('/switchCase', (req, res) => {
    res.send('exercicio: estrutura case ' + estruturaCase())
})

app.get('/aritmeticos', (req, res) => {
    res.send('exercicio: numeros aritmeticos ' + aritmeticos(3, 3))
})

app.get('/loop', (req, res) => {
    res.send('exercicio: loop' + loop)
})


app.get('/ifElse/:n1', (req, res) => {
    let nota = parseFloat(req.params.n1);
    res.send('Exercicio: if else ' + '<br><br>' + ifElse(nota))
})


app.get('/relacionais', (req, res) => {
    res.send('exercicio: relacionais ' + relacionais(3, 3))
})

app.get('/vetor', (req, res) => {
    res.send('exercicio: vetor ' + vetor())
})






//queryString: --------------------------------------------------------------------------------------------------------
app.get('/variaveis', (req, res) => {
    let variavel = variaveis();
    res.send("variaveis " + variavel())
})

app.get('/logicos', (req, res) => {
    res.send('exercicio: logico ' + logicos())
})

app.get('/switchCase', (req, res) => {
    res.send('exercicio: estrutura case ' + estruturaCase())
})


app.get('/aritmeticos', (req, res) => {
    res.send('exercicio: numeros aritmeticos ' + aritmeticos(3, 3))
})


app.get('/loop', (req, res) => {
    res.send('exercicio: loop' + loop)
})


app.get('/ifElse', (req, res) => {
    res.send('exercicio: if else ' + ifElse())
})

app.get('/relacionais', (req, res) => {
    res.send('exercicio: relacionais ' + relacionais(3, 3))
})

app.get('/vetor', (req, res) => {
    res.send('exercicio: vetor ' + vetor())
})



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
  })

