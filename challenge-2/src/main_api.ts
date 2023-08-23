import { InMemoryCharacterRepository } from './repository/in-memory/InMemoryCharacterRepository';
import GetAllCharactersUseCase from './usecase/GetAllCharactersUseCase';
import HttpServerExpressAdapter from './http/HttpServerExpressAdapter';
import HttpController from './http/HttpController';
import HttpServerHapiAdapter from './http/HttpServerHapiAdapter';
import RickAndMortyAPIClientGatewayImpl from './client/RickAndMortyAPIClientGatewayImpl';
import HttpClientAxiosAdapter from './http/HttpClientAxiosAdapter';

// main
const repository = new InMemoryCharacterRepository();
const httpClient = new HttpClientAxiosAdapter();
const rickAndMortyApiGateway = new RickAndMortyAPIClientGatewayImpl(httpClient);
const getAllCharactersUseCase = new GetAllCharactersUseCase(
  repository,
  rickAndMortyApiGateway,
);
// const httpServer = new HttpServerExpressAdapter()
const httpServer = new HttpServerHapiAdapter();

new HttpController(httpServer, getAllCharactersUseCase);
httpServer.listen(3000);
