export type CharacterList = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev?: string;
  };
  results: APICharacter[];
};

export type APICharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  url: string;
};
