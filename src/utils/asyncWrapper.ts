import { Request, Response, NextFunction } from 'express';

export const asyncWrapper = (func: (req: Request, res: Response) => any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await func(req, res);
            return;
        }
        catch (error) {
            next(error);
        }
    }
}