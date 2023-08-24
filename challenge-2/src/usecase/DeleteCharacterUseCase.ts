import { CharacterRepository } from '../repository/CharacterRepository';

export default class DeleteCharacterUseCase {
  constructor(readonly characterRepository: CharacterRepository) {}

  async execute(id: number): Promise<void> {
    const existingCharacter = await this.characterRepository.findById(id);
    if (!existingCharacter) {
      throw new Error(`Character with ID ${id} not found`);
    }
    await this.characterRepository.delete(existingCharacter);
  }
}
