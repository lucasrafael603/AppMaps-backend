import express, { NextFunction, Request, Response } from 'express';
import uploadConfig from './config/upload'
import routes from './Routes'
import cors from 'cors'
//import 'express-async-errors' caso quiser ativar tratativa de erros global



import upload from './config/upload';


const app = express();

app.use(cors())
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory)) /// Cria rota estatica de de arquivos
app.use(routes);



app.listen(3333, () => { console.log('🤖 Iniciou o servidor'); });
