import DeleteCharacterUseCase from '../usecase/DeleteCharacterUseCase';
import GetAllCharactersUseCase from '../usecase/GetAllCharactersUseCase';
import GetOneCharacterUseCase from '../usecase/GetOneCharacterUseCase';
import InsertCharacterUseCase from '../usecase/InsertCharacterUseCase';
import UpdateCharacterUseCase from '../usecase/UpdateCharacterUseCase';
import HttpServer from './HttpServer';

export default class HttpController {
  constructor(
    readonly httpServer: HttpServer,
    readonly getAllCharacterUseCase: GetAllCharactersUseCase,
    readonly getOneCharacterUseCase: GetOneCharacterUseCase,
    readonly insertCharacterUseCase: InsertCharacterUseCase,
    readonly updateCharacterUseCase: UpdateCharacterUseCase,
    readonly deleteCharacterUseCase: DeleteCharacterUseCase,
  ) {
    httpServer.on(
      'get',
      '/character',
      async () => {
        const output = await getAllCharacterUseCase.execute();
        return output;
      },
      200,
    );

    httpServer.on(
      'get',
      '/character',
      async (params: any) => {
        const output = await getOneCharacterUseCase.execute(params.id);
        return output;
      },
      200,
      'id',
    );

    httpServer.on(
      'post',
      '/character',
      async (params: any, payload: any) => {
        return await insertCharacterUseCase.execute(payload);
      },
      201,
    );

    httpServer.on(
      'put',
      '/character',
      async (params: any, payload: any) => {
        await updateCharacterUseCase.execute(params.id, payload);
      },
      200,
      'id',
    );

    httpServer.on(
      'delete',
      '/character',
      async (params: any) => {
        await deleteCharacterUseCase.execute(parseInt(params.id));
      },
      204,
      'id',
    );
  }
}
