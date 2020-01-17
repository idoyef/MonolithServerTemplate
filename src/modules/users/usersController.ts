import express, { Request, Response } from 'express';
import { UsersService } from './usersService';
import { asyncWrapper } from '../../utils/asyncWrapper';

const router = express.Router();

export const usersController = (usersService: UsersService) => {
    router.route('/').post(createUser());

    function createUser() {
        return asyncWrapper(async (req: Request, res: Response) => {
            const result = await usersService.createUser(req.body);
            return res.status(201).json(result);
        });
    }

    return router;
}
