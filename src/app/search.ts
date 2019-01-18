import { Movie } from './movie';
import {Tv} from './tv';
import {Person} from './person';

export class Search {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
}
export class SearchTv {
  page: number;
  total_results: number;
  total_pages: number;
  results: Tv[];
}
export class SearhPerson {
  page: number;
  total_results: number;
  total_pages: number;
  results: Person[];
}
