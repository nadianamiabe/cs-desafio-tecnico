import HttpServer from './HttpServer';
import express, { Request, Response } from 'express';

export default class HttpServerExpressAdapter implements HttpServer {
  // esse era o app definido no main_api.ts
  app: any;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  on(
    method: string,
    url: string,
    callback: Function,
    parameter?: string,
  ): void {
    // Acesso com Expressão Dinâmica this.app[method]
    this.app[method](
      parameter ? `${url}/:${parameter}` : url,
      async function (req: Request, res: Response) {
        try {
          const ouput = await callback(req.params, req.body);
          res.json(ouput);
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
