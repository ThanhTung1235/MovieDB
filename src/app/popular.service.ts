import {Injectable} from '@angular/core';
import {Observable, from, of} from 'rxjs';
import {Popular} from './popular';
import {HttpClient} from '@angular/common/http';
import {tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PopularService {

  constructor(private http: HttpClient) {
  }

  private apiKey = localStorage.getItem('apiKey');

  getMovie(page: number): Observable<Popular> {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=${page}`;
    return this.http.get(url).pipe(
      map(response => {
        console.log(response);
        return response as Popular;
      })
    );
  }
}
