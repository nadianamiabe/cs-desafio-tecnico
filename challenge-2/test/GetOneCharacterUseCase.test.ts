import RickAndMortyAPIClientGatewayImpl from '../src/client/RickAndMortyAPIClientGatewayImpl';
import Character from '../src/entity/Character';
import HttpClientAxiosAdapter from '../src/http/HttpClientAxiosAdapter';
import { InMemoryCharacterRepository } from '../src/repository/in-memory/InMemoryCharacterRepository';
import GetOneCharacterUseCase from '../src/usecase/GetOneCharacterUseCase';

test('Should return data from repository', async () => {
  const repository = new InMemoryCharacterRepository();
  const httpClient = new HttpClientAxiosAdapter();
  const apiClientGateway = new RickAndMortyAPIClientGatewayImpl(httpClient);
  const usecase = new GetOneCharacterUseCase(repository, apiClientGateway);

  const persisted = await repository.create(
    new Character(
      1,
      'Teste teste',
      'Alive',
      'Feline',
      'Male',
      'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fcat%2F&psig=AOvVaw3XqBuR0TTbdYlaE0oHfRQM&ust=1692972480352000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCODt9Yu89YADFQAAAAAdAAAAABAE',
    ),
  );

  const output = await usecase.execute(1);

  expect(output.id).toBe(persisted.id);
});

test('Should spy on getOne from api gateway', async () => {
  const repository = new InMemoryCharacterRepository();
  const httpClient = new HttpClientAxiosAdapter();
  const apiClientGateway = new RickAndMortyAPIClientGatewayImpl(httpClient);
  const usecase = new GetOneCharacterUseCase(repository, apiClientGateway);
  const spy = jest.spyOn(apiClientGateway, 'getOne');

  await usecase.execute(1);

  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
