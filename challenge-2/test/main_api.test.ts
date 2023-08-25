import axios from 'axios';

test('Should return all characters', async () => {
  const response = await axios.get('http://localhost:3000/character');
  expect(response.status).toBe(200);
});

test('Should return one character', async () => {
  const response = await axios.get('http://localhost:3000/character/1');
  expect(response.status).toBe(200);
});

test('Should insert one character', async () => {
  const input = {
    name: 'Teste teste',
    status: 'Alive',
    species: 'Feline',
    gender: 'Male',
    image: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
    url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fcat%2F&psig=AOvVaw3XqBuR0TTbdYlaE0oHfRQM&ust=1692972480352000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCODt9Yu89YADFQAAAAAdAAAAABAE',
  };
  const response = await axios.post('http://localhost:3000/character', input);
  expect(response.status).toBe(201);
});

test('Should update one character', async () => {
  const input = {
    status: 'Alive',
    species: 'Feline',
    gender: 'Male',
    image: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
  };
  const response = await axios.put('http://localhost:3000/character/1', input);
  expect(response.status).toBe(200);
});

test('Should delete one character', async () => {
  const response = await axios.delete('http://localhost:3000/character/1');
  expect(response.status).toBe(204);
});
