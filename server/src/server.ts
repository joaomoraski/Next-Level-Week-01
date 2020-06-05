import express, { response, request } from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'Celebrate';

// Deu erro de definição de tipos
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
//função par arquivos estaticos que tao na propria aplicação

app.use(errors());

app.listen(3333);