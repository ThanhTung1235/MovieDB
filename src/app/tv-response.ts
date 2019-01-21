import {Tv} from './tv';

export class TvResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Tv[];
}
