import Character from '../entity/Character';
import { CharacterRepository } from '../repository/CharacterRepository';

export default class InsertCharacterUseCase {
  constructor(readonly characterRepository: CharacterRepository) {}

  async execute(insertCharacterData: InsertCharacterData): Promise<Character> {
    const characterList = await this.characterRepository.getAll();
    return this.characterRepository.create(
      new Character(
        characterList.length + 1,
        insertCharacterData.name,
        insertCharacterData.status,
        insertCharacterData.species,
        insertCharacterData.gender,
        insertCharacterData.image,
        insertCharacterData.url,
      ),
    );
  }
}

export type InsertCharacterData = {
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  url: string;
};
