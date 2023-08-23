export default class Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  url: string;

  constructor(
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    image: string,
    url: string,
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.species = species;
    this.gender = gender;
    this.image = image;
    this.url = url;
  }
}
