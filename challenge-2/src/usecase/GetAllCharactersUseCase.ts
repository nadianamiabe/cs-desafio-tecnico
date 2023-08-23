import { CharacterList } from '../client/typed';
import { CharacterRepository } from '../repository/CharacterRepository';
import { InMemoryCharacterRepository } from '../repository/in-memory/InMemoryCharacterRepository';
import RickAndMortyAPIClientGateway from '../client/RickAndMortyAPIClientGateway';

export default class GetAllCharactersUseCase {
  constructor(
    readonly characterRepository: CharacterRepository = new InMemoryCharacterRepository(),
    readonly apiClientGateway: RickAndMortyAPIClientGateway,
  ) {}

  async execute(): Promise<CharacterList> {
    return await this.apiClientGateway.getAll();
  }
}
