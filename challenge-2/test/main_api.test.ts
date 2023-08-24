import axios from 'axios';

test('Should return all characters', async () => {
  const response = await axios.get('http://localhost:3000/character');
  expect(response.status).toBe(200);
});

test('Should return one character', async () => {
  const response = await axios.get('http://localhost:3000/character/1');
  expect(response.status).toBe(200);
});
