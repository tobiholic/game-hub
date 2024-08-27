import { Genre } from './Genre';
import { Platform } from './Platform';
import { Publishers } from './Publisher';
import Ratings from './Ratings';

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  metacritic: number;
  released: string;
  rating_top: number;
  website: string;
  playtime: number;
  genres: Genre[];
  publishers: Publishers[];
  parent_platforms: { platform: Platform }[];
  ratings: Ratings[];
}
