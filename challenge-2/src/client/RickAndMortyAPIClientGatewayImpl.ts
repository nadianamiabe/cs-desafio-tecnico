import HttpClient from '../http/HttpClient';
import RickAndMortyAPIClientGateway from './RickAndMortyAPIClientGateway';
import { APICharacter, CharacterList } from './typed';

export default class RickAndMortyAPIClientGatewayImpl
  implements RickAndMortyAPIClientGateway
{
  constructor(readonly httpClient: HttpClient) {}

  async getAll(): Promise<CharacterList> {
    const characterListData = await this.httpClient.get(
      'https://rickandmortyapi.com/api/character',
    );
    const characterList: APICharacter[] = characterListData.results.map(
      (character: any) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          gender: character.gender,
          image: character.image,
          url: character.url,
        };
      },
    );
    return {
      info: {
        count: characterListData.info.count,
        pages: characterListData.info.pages,
        next: characterListData.info.next,
        prev: characterListData.info.prev,
      },
      results: characterList,
    };
  }

  async getOne(id: number): Promise<APICharacter> {
    const characterData = await this.httpClient.get(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    return {
      id: characterData.id,
      name: characterData.name,
      status: characterData.status,
      species: characterData.species,
      gender: characterData.gender,
      image: characterData.image,
      url: characterData.url,
    };
  }
}
