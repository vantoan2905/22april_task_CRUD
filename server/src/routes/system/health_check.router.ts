import { Router, Request, Response } from 'express';
import { successResponse, errorResponse } from '../../utils/response';
// import { sequelize } from '../database/connection';
import { logger } from '../../middlewares/logger';
const health_check_router = Router();

health_check_router.get('/', async (req: Request, res: Response) => {
  let data;

  try {
    // await sequelize.authenticate();
    data = successResponse(null, 'ok');
    // console.log("check connection");
    logger(req, res, 'check connection');

  } catch (err) {
    data = errorResponse('Database connection error', []);
  }

  res.json(data);
});

export default health_check_router;
