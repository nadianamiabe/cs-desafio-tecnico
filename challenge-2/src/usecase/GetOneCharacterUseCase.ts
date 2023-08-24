import { CharacterRepository } from '../repository/CharacterRepository';
import RickAndMortyAPIClientGateway from '../client/RickAndMortyAPIClientGateway';
import { APICharacter } from '../client/typed';

export default class GetOneCharacterUseCase {
  constructor(
    readonly characterRepository: CharacterRepository,
    readonly apiClientGateway: RickAndMortyAPIClientGateway,
  ) {}

  async execute(id: number): Promise<APICharacter> {
    try {
      let persisted = await this.characterRepository.findById(id);
      return persisted;
    } catch (error) {
      return await this.apiClientGateway.getOne(id);
    }
  }
}
