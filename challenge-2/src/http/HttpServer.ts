// interface adapter / framework and driver
export default interface HttpServer {
  on(method: string, url: string, callback: Function, parameter?: string): void;
  listen(port: number): void;
}
