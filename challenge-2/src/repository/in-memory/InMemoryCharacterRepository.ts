import Character from '../../entity/Character';
import { CharacterRepository } from '../CharacterRepository';

export class InMemoryCharacterRepository implements CharacterRepository {
  public items: Character[] = [];

  async create(character: Character): Promise<Character> {
    this.items.push(character);
    return character;
  }

  async update(character: Character): Promise<void> {
    const index = this.items.findIndex((item) => item.id === character.id);
    if (index !== -1) {
      this.items[index] = character;
    }
  }

  async delete(character: Character): Promise<void> {
    character.removed = true;
    this.update(character);
  }

  async findById(id: number): Promise<Character> {
    const character = this.items.find((character) => {
      return character.id == id;
    });

    if (!character) {
      throw new Error(`Personagem com ID ${id} não encontrado.`);
    }

    return character;
  }

  async getAll(): Promise<Character[]> {
    return this.items;
  }
}
