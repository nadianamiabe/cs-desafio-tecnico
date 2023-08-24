import Character from '../src/entity/Character';
import { InMemoryCharacterRepository } from '../src/repository/in-memory/InMemoryCharacterRepository';
import UpdateCharacterUseCase from '../src/usecase/UpdateCharacterUseCase';

test('Should update existing character', async () => {
  const repository = new InMemoryCharacterRepository();
  const usecase = new UpdateCharacterUseCase(repository);
  repository.create(
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
  const input = {
    status: 'Dead',
    species: 'Feline',
    gender: 'Female',
    image: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
  };
  await usecase.execute(1, input);
  const persisted = await repository.findById(1);
  expect(persisted.status).toBe(input.status);
  expect(persisted.gender).toBe(input.gender);
});

test('Should throw Error when character does not exist', async () => {
  const repository = new InMemoryCharacterRepository();
  const usecase = new UpdateCharacterUseCase(repository);

  const input = {
    status: 'Dead',
    species: 'Feline',
    gender: 'Female',
    image: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
  };
  try {
    await usecase.execute(1, input);
  } catch (error: any) {
    expect(error.message).toBe('Personagem com ID 1 não encontrado.');
  }
});
