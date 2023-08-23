import { CharacterList } from './typed';

export default interface RickAndMortyAPIClientGateway {
  getAll(): Promise<CharacterList>;
}
