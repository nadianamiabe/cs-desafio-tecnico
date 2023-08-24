import RickAndMortyAPIClientGatewayImpl from '../src/client/RickAndMortyAPIClientGatewayImpl';
import HttpClientAxiosAdapter from '../src/http/HttpClientAxiosAdapter';

test('Should return all data from API', async () => {
  const httpClient = new HttpClientAxiosAdapter();
  const apiGateway = new RickAndMortyAPIClientGatewayImpl(httpClient);
  const output = await apiGateway.getAll();
  expect(output).toHaveProperty('info');
  expect(output.info).toHaveProperty('count');
  expect(output.info).toHaveProperty('pages');
  expect(output.info).toHaveProperty('next');
  expect(output.info).toHaveProperty('prev');
  expect(output.results.length).toBe(20);
});

test('Should return a specific data from API', async () => {
  const httpClient = new HttpClientAxiosAdapter();
  const apiGateway = new RickAndMortyAPIClientGatewayImpl(httpClient);
  const output = await apiGateway.getOne(2);
  expect(output.id).toBe(2);
  expect(output.name).toBe('Morty Smith');
  expect(output.status).toBe('Alive');
  expect(output.species).toBe('Human');
  expect(output.gender).toBe('Male');
  expect(output.image).toBe(
    'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  );
  expect(output.url).toBe('https://rickandmortyapi.com/api/character/2');
});
