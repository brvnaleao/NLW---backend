import express from 'express';
import { getRepository } from 'typeorm';
import './database/connection'
import Orphanage from './model/Orphanage'
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);


//query params: /users?search=bruna
//route params /users/123
//body: corpo da requisição -> vindos de formulários
app.listen(3333);


//object relational mapping

//para cada tabela há uma classe e cada retorno (row) é uma instância - um objeto - dessa classe

//migrations - controle de versão no banco de dados