export default class Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  url: string;
  removed: boolean;

  constructor(
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    image: string,
    url: string,
    removed: boolean = false,
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.species = species;
    this.gender = gender;
    this.image = image;
    this.url = url;
    this.removed = removed;
  }
}
