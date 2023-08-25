import HttpServer from './HttpServer';
import express, { Request, Response } from 'express';

export default class HttpServerExpressAdapter implements HttpServer {
  app: any;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  on(
    method: string,
    url: string,
    callback: Function,
    statusCode = 200,
    parameter?: string,
  ): void {
    this.app[method](
      parameter ? `${url}/:${parameter}` : url,
      async function (req: Request, res: Response) {
        try {
          const ouput = await callback(req.params, req.body);
          res.setHeader('Content-Type', 'application/json');
          res.status(statusCode).json(ouput);
        } catch (error: any) {
          res.status(422).json({
            message: error.message,
          });
        }
      },
    );
  }

  listen(port: number): void {
    this.app.listen(port);
  }
}
