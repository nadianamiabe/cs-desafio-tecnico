import { APICharacter, CharacterList } from './typed';

export default interface RickAndMortyAPIClientGateway {
  getAll(): Promise<CharacterList>;
  getOne(id: number): Promise<APICharacter>;
}
