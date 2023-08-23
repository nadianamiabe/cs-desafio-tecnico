import axios from 'axios';

test('Should return all characters', async () => {
  const response = await axios.get('http://localhost:3000/character');
  const output = response.data;
});
