import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { UsersService } from './modules/users/usersService';
import { usersController } from './modules/users/usersController';
import { MongoRepository } from './common/mongo/mongooseWrapperRepository';
import { usersSchema } from './modules/users/dataAccess/usersSchema';
import { authController } from './modules/auth/authController';
import { AuthService } from './modules/auth/authService';

export const initApp = () => {
    const options = {
        origin: '*',
        optionSuccessStatus: 200
    }
    const app = express();
    app.use(cors(options)).use(bodyParser.json());

    const usersRepository = new MongoRepository('users', usersSchema);
    const usersService = new UsersService(usersRepository);
    app.use('/users', usersController(usersService));

    const authService = new AuthService(usersRepository);
    app.use('/auth', authController(authService));

    return app;
}