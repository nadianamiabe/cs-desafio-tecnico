import { CharacterList } from '../client/typed';
import { CharacterRepository } from '../repository/CharacterRepository';
import RickAndMortyAPIClientGateway from '../client/RickAndMortyAPIClientGateway';
import Character from '../entity/Character';

export default class GetAllCharactersUseCase {
  constructor(
    readonly characterRepository: CharacterRepository,
    readonly apiClientGateway: RickAndMortyAPIClientGateway,
  ) {}

  async execute(): Promise<CharacterList> {
    const characters = await this.characterRepository.getAll();
    let charactersFromApi = await this.apiClientGateway.getAll();
    if (characters.length === 0) {
      charactersFromApi.results.forEach((character) => {
        this.characterRepository.create(
          new Character(
            character.id,
            character.name,
            character.status,
            character.species,
            character.gender,
            character.image,
            character.url,
          ),
        );
      });
    }
    return {
      info: {
        count: charactersFromApi.info.count,
        pages: charactersFromApi.info.pages,
        next: charactersFromApi.info.next,
        prev: charactersFromApi.info.prev,
      },
      results: characters,
    };
  }
}
