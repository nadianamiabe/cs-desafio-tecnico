import Character from '../entity/Character';

export interface CharacterRepository {
  create(character: Character): Promise<Character>;
  update(character: Character): Promise<void>;
  delete(character: Character): Promise<void>;
  findById(id: number): Promise<Character>;
  getAll(): Promise<Character[]>;
}
