import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';
import { celebrate, Joi } from 'Celebrate';


const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();


routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);//listar varios
routes.get('/points/:id', pointsController.show);//mostrar 1 



routes.post(
        '/points',
        upload.single('image'),
        celebrate({
            body: Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().required().email(),
                whatsapp: Joi.number().required(),
                latitude: Joi.number().required(),
                longitude: Joi.number().required(),
                city: Joi.string().required(),
                uf: Joi.string().required().max(2),
                items: Joi.string().required(),
            })
        }, {
            abortEarly: false,
        }),
        pointsController.create
        );


export default routes;

// Migrations: Historico do banco de dados

// Ajuda a trabalhar com mais de 1 desenvolvedor

// Criei a tabela chamada points
// Meu parça criou users