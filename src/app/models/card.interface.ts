export interface Card{
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  types?: string[];
  number: string;
  artist?: string;
  rarity: string;
  flavorText?: string;
  nationalPokedexNumbers?: number[];
  images: string;
}
