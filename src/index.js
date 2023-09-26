import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes';
import database from './config/database';
import { 
  appErrorHandler,
  genericErrorHandler,
  notFound
} from './middlewares/error.middleware';
import logger, { logStream } from './config/logger';

import morgan from 'morgan';

const app = express();
const host = process.env.APP_HOST;          // we can acess ev in apllication using process.env  represent host name adrees at which server will listen incoming http request
const port = process.env.APP_PORT;            //port number on which node.js application listen http request 
const api_version = process.env.API_VERSION;    // api version we are test or working

app.use(cors());                                  // allowing  server to accept requests from different origins (domains).
app.use(helmet());                                //enhancing  server's security by adding various security-related HTTP headers.
app.use(express.urlencoded({ extended: true }));   //middleware is used to parse incoming data from forms on web pages when users submit data. It makes this data accessible for your server to use.
app.use(express.json());
app.use(morgan('combined', { stream: logStream }));

database();

app.use(`/api/${api_version}`, routes());  //specifies a base path
app.use(appErrorHandler);                      //(handling application-specific errors that might occur during request processing , It's used to centralize error handling for your application.)
app.use(genericErrorHandler);                  //handles general errors that don't fall into a specific route or context.
app.use(notFound);                              

app.listen(port, () => {
  logger.info(`Server started at ${host}:${port}/api/${api_version}/`);
});

export default app;

//Named Exports:
//Named exports allow you to export multiple variables, functions, or objects from a module by giving each export a specific name.



//default Export
//line at the end of the code exports a single value, in this case, the router object, as the default export of the module.
