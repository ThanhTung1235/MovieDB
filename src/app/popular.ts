import { Movie } from './movie';

export class Popular {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
}
