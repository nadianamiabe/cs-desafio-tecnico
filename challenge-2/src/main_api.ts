import { InMemoryCharacterRepository } from './repository/in-memory/InMemoryCharacterRepository';
import GetAllCharactersUseCase from './usecase/GetAllCharactersUseCase';
import HttpServerExpressAdapter from './http/HttpServerExpressAdapter';
import HttpController from './http/HttpController';
import HttpServerHapiAdapter from './http/HttpServerHapiAdapter';
import RickAndMortyAPIClientGatewayImpl from './client/RickAndMortyAPIClientGatewayImpl';
import HttpClientAxiosAdapter from './http/HttpClientAxiosAdapter';
import GetOneCharacterUseCase from './usecase/GetOneCharacterUseCase';
import InsertCharacterUseCase from './usecase/InsertCharacterUseCase';
import UpdateCharacterUseCase from './usecase/UpdateCharacterUseCase';
import DeleteCharacterUseCase from './usecase/DeleteCharacterUseCase';

// main
const repository = new InMemoryCharacterRepository();
const httpClient = new HttpClientAxiosAdapter();
const rickAndMortyApiGateway = new RickAndMortyAPIClientGatewayImpl(httpClient);
const getAllCharactersUseCase = new GetAllCharactersUseCase(
  repository,
  rickAndMortyApiGateway,
);
const getOneCharacterUseCase = new GetOneCharacterUseCase(
  repository,
  rickAndMortyApiGateway,
);

const insertCharacterUseCase = new InsertCharacterUseCase(repository);
const updateCharacterUseCase = new UpdateCharacterUseCase(repository);
const deleteCharacterUseCase = new DeleteCharacterUseCase(repository);

const httpServer = new HttpServerExpressAdapter();
// const httpServer = new HttpServerHapiAdapter();

new HttpController(
  httpServer,
  getAllCharactersUseCase,
  getOneCharacterUseCase,
  insertCharacterUseCase,
  updateCharacterUseCase,
  deleteCharacterUseCase,
);
httpServer.listen(3000);
