import RickAndMortyAPIClientGatewayImpl from '../src/client/RickAndMortyAPIClientGatewayImpl';
import Character from '../src/entity/Character';
import HttpClientAxiosAdapter from '../src/http/HttpClientAxiosAdapter';

test('Should return data from API', async () => {
  const httpClient = new HttpClientAxiosAdapter();
  const apiGateway = new RickAndMortyAPIClientGatewayImpl(httpClient);
  const output = await apiGateway.getAll();
  expect(output.results[0]).toBeInstanceOf(Character);
  expect(output).toHaveProperty('info');
  expect(output.info).toHaveProperty('count');
  expect(output.info).toHaveProperty('pages');
  expect(output.info).toHaveProperty('next');
  expect(output.info).toHaveProperty('prev');
});
