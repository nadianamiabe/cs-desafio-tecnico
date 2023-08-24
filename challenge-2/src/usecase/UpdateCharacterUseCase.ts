import { CharacterRepository } from '../repository/CharacterRepository';

export default class UpdateCharacterUseCase {
  constructor(readonly characterRepository: CharacterRepository) {}

  async execute(
    id: number,
    updateCharacterData: UpdateCharacterData,
  ): Promise<void> {
    const persisted = await this.characterRepository.findById(id);
    if (!persisted) {
      throw new Error(`Personagem com ID ${id} não encontrado.`);
    }
    persisted.status = updateCharacterData.status;
    persisted.species = updateCharacterData.species;
    persisted.gender = updateCharacterData.gender;
    persisted.image = updateCharacterData.image;
    this.characterRepository.update(persisted);
  }
}

export type UpdateCharacterData = {
  status: string;
  species: string;
  gender: string;
  image: string;
};
