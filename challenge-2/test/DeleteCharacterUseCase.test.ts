import Character from '../src/entity/Character';
import { InMemoryCharacterRepository } from '../src/repository/in-memory/InMemoryCharacterRepository';
import DeleteCharacterUseCase from '../src/usecase/DeleteCharacterUseCase';

test('Should delete a character', async () => {
  const repository = new InMemoryCharacterRepository();
  const usecase = new DeleteCharacterUseCase(repository);
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
  await usecase.execute(1);
  expect((await repository.findById(1)).removed).toBe(true);
});
