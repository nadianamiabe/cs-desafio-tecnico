import Character from '../entity/Character';

export interface CharacterRepository {
  create(character: Character): Character;
  update(character: Character): Promise<void>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<void>;
  getAll(): Character[];
}
