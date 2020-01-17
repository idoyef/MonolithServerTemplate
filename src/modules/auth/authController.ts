import express, { Request, Response } from 'express';
import { AuthService } from './authService';
import { asyncWrapper } from '../../utils/asyncWrapper';

const router = express.Router();

export const authController = (authService: AuthService) => {
    // router.route('/').post(createUser());

    // function createUser() {
    //     return asyncWrapper(async (req: Request, res: Response) => {
    //         const result = await usersService.createUser(req.body);
    //         return res.status(201).json(result);
    //     });
    // }

    return router;
}
