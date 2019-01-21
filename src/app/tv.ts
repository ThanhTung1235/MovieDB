import {Genres} from './genres';

export class Tv {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  first_air_date: string;
  homepage: string;
  vote_average: string;
  status: string;
  original_language: string;
  genres: Genres[];
}
