import GetAllCharactersUseCase from '../usecase/GetAllCharactersUseCase';
import HttpServer from './HttpServer';

// interface adapter - oferece um ponto de conexão que é o httpServer
// esse controller toca o usecase (application), mas ele não sabe quem implementa o recurso de quem o consome
// é a ponte entre o recurso externo e aplicação, expõe uma porta de conexão que é suprida pelo ExpressAdapter
export default class HttpController {
  constructor(
    readonly httpServer: HttpServer,
    readonly getAllCharacterUseCase: GetAllCharactersUseCase,
  ) {
    httpServer.on('get', '/character', async () => {
      const output = await getAllCharacterUseCase.execute();
      return output;
    });
  }
}
