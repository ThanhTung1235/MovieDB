import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from './movie';
import {tap, map} from 'rxjs/operators';
import {MovieDetails} from './movie-details';
import {Credits} from './credits';
import {Videos} from './videos';
import {Recommendations} from './recommendations';
import {Key} from './key';


@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

  constructor(private http: HttpClient) {
  }

  private apiKey = localStorage.getItem('apiKey');


  getMovieDetail(id: number): Observable<MovieDetails> {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get<MovieDetails>(url).pipe(
      map(response => {
          return response as MovieDetails;
        }
      ));
  }

  getCastMovie(id: number): Observable<Credits> {
    const urlCast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.apiKey}`;
    return this.http.get<Credits>(urlCast).pipe(
      map(response_content => {
        return response_content as Credits;
      })
    );
  }

  getVideos(id: number): Observable<Videos> {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.apiKey}`;
    return this.http.get<Videos>(url).pipe(
      map(response_videos => {
        return response_videos as Videos;
      })
    );
  }

  getRecommend(id: number): Observable<Recommendations> {
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${this.apiKey}`;
    return this.http.get<Recommendations>(url).pipe(
      map(response => {
        return response as Recommendations;
      })
    );
  }
  getKeyWord(id: number): Observable<Key> {
    const url = `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${this.apiKey}`;
    return this.http.get<Key>(url).pipe(
      map(keyword_rsp => {
        return keyword_rsp as Key;
      })
    );
  }

}
