import Character from '../entity/Character';
import { APICharacterToEntity } from '../entity/CharacterMapper';
import HttpClient from '../http/HttpClient';
import RickAndMortyAPIClientGateway from './RickAndMortyAPIClientGateway';
import { CharacterList } from './typed';

export default class RickAndMortyAPIClientGatewayImpl
  implements RickAndMortyAPIClientGateway
{
  constructor(readonly httpClient: HttpClient) {}

  async getAll(): Promise<CharacterList> {
    const characterListData = await this.httpClient.get(
      'https://rickandmortyapi.com/api/character',
    );
    const characterList: Character[] = characterListData.results.map(
      (character: any) => {
        return APICharacterToEntity(character);
      },
    );
    return {
      info: {
        count: characterListData?.info.count,
        pages: characterListData?.info.pages,
        next: characterListData?.info.next,
        prev: characterListData?.info.prev,
      },
      results: characterList,
    };
  }
}
