export default interface HttpServer {
  on(
    method: string,
    url: string,
    callback: Function,
    statusCode: number,
    parameter?: string,
  ): void;
  listen(port: number): void;
}
