import {MovieDetails} from './movie-details';

export class Person {
  id: number;
  name: string;
  birthday: string;
  gender: number;
  deathday: string;
  biography: string;
  popularity: string;
  place_of_birth: string;
  profile_path: string;
  known_for_department: string;
  homepage: string;
  known_for: MovieDetails[];
  also_known_as: string[];
}
