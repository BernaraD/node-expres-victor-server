import express from 'express';
import errorHandler from './modules/core/errorHandler';
import logger from './modules/core/logger';
import parseResponse from './modules/core/parseResponse';
import cors from './modules/core/cors';
import routes from './modules/core/routes';
import dbConnect from './modules/core/db';

const app = express();
const PORT = 5000;

dbConnect();
logger(app); // 1. должен стоять выше всех middleware чтобы показывалось в console.log
parseResponse(app);
cors(app);
routes(app);

errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
