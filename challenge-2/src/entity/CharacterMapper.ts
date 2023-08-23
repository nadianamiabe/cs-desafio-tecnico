import { APICharacter } from '../client/typed';
import Character from './Character';

export function APICharacterToEntity(APICharacter: APICharacter): Character {
  return new Character(
    APICharacter.id,
    APICharacter.name,
    APICharacter.status,
    APICharacter.species,
    APICharacter.gender,
    APICharacter.image,
    APICharacter.url,
  );
}

export function EntityToAPICharacter(character: Character): APICharacter {
  return {
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    gender: character.gender,
    image: character.image,
    url: character.url,
  };
}
