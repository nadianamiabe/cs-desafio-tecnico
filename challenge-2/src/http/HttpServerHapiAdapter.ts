import HttpServer from './HttpServer';
import Hapi from '@hapi/hapi';

export default class HttpServerHapiAdapter implements HttpServer {
  server: Hapi.Server;

  constructor() {
    this.server = Hapi.server({});
  }

  on(
    method: string,
    url: string,
    callback: Function,
    statusCode = 200,
    parameter?: string,
  ): void {
    this.server.route({
      method,
      path: parameter ? `${url}/{${parameter}}` : url,
      handler: async (req: any, reply: any) => {
        try {
          const ouput = await callback(req.params, req.payload);
          return reply.response(ouput).code(statusCode);
        } catch (error: any) {
          return reply
            .response({
              message: error.message,
            })
            .code(422);
        }
      },
    });
  }

  listen(port: number): void {
    this.server.settings.port = port;
    this.server.start();
  }
}
