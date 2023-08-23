import Character from '../../entity/Character';
import { CharacterRepository } from '../CharacterRepository';

export class InMemoryCharacterRepository implements CharacterRepository {
  public items: Character[] = [];

  create(character: Character): Character {
    this.items.push(character);
    return character;
  }

  async update(character: Character): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async findById(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  getAll(): Character[] {
    return this.items;
  }
}
