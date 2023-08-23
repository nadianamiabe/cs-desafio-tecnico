import RickAndMortyAPIClientGatewayImpl from '../src/client/RickAndMortyAPIClientGatewayImpl';
import HttpClientAxiosAdapter from '../src/http/HttpClientAxiosAdapter';
import { InMemoryCharacterRepository } from '../src/repository/in-memory/InMemoryCharacterRepository';
import GetAllCharactersUseCase from '../src/usecase/GetAllCharactersUseCase';

test('Should return all data from api gateway', async () => {
  const repository = new InMemoryCharacterRepository();
  const httpClient = new HttpClientAxiosAdapter();
  const apiClientGateway = new RickAndMortyAPIClientGatewayImpl(httpClient);
  const usecase = new GetAllCharactersUseCase(repository, apiClientGateway);
  const output = await usecase.execute();
  expect(output).toBeTruthy();
});
