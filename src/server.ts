import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { getRepository } from 'typeorm';
import './database/connection'
import Orphanage from './model/Orphanage'
import routes from './routes';
import path from 'path';
import errorHandler from './errors/handler'
const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)
//query params: /users?search=bruna
//route params /users/123
//body: corpo da requisição -> vindos de formulários
app.listen(3333);


//object relational mapping

//para cada tabela há uma classe e cada retorno (row) é uma instância - um objeto - dessa classe

//migrations - controle de versão no banco de dados