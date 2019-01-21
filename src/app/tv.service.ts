import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tv} from './tv';
import {map} from 'rxjs/operators';
import {TvResponse} from './tv-response';
import {Cast} from './cast';
import {MovieCredit} from './movie-credit';
import {Videos} from './videos';
import {KeyWord} from './key-word';
import {Key} from './key';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private httpClient: HttpClient) {
  }

  apiKey = localStorage.getItem('apiKey');

  getPopular(page: number): Observable<TvResponse> {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=en-US&page=${page}`;
    return this.httpClient.get<TvResponse>(url).pipe(map(tv_response => {
      return tv_response as TvResponse;
    }));
  }

  getTopRate(page: number): Observable<TvResponse> {
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}&language=en-US&${page}`;
    return this.httpClient.get<TvResponse>(url).pipe(map(tv_response => {
      return tv_response as TvResponse;
    }));
  }

  getOnTv(page: number): Observable<TvResponse> {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=en-US&${page}`;
    return this.httpClient.get<TvResponse>(url).pipe(map(tv_response => {
      return tv_response as TvResponse;
    }));
  }

  getAiringToday(page: number): Observable<TvResponse> {
    const url = `https://api.themoviedb.org/3/tv/airing_today?api_key=${this.apiKey}&language=en-US&${page}`;
    return this.httpClient.get<TvResponse>(url).pipe(map(tv_response => {
      return tv_response as TvResponse;
    }));
  }

  getTvDetails(id: number): Observable<Tv> {
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${this.apiKey}&language=en-US`;
    return this.httpClient.get<Tv>(url).pipe(map(tv_response => {
      return tv_response as Tv;
    }));
  }

  getCast(id: number): Observable<Cast> {
    const url = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${this.apiKey}&language=en-US`;
    return this.httpClient.get<Cast>(url).pipe(map(cast_response => {
      return cast_response as Cast;
    }));
  }

  getVideo(id: number): Observable<Videos> {
    const url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${this.apiKey}&language=en-US`;
    return this.httpClient.get<Videos>(url).pipe(map(response_content => {
      return response_content as Videos;
    }));
  }

  getRecommend(id: number): Observable<TvResponse> {
    const url = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${this.apiKey}&language=en-US&page=1`;
    return this.httpClient.get(url).pipe(map(response => {
      return response as TvResponse;
    }));
  }

  getKeyword(id: number): Observable<Key> {
    const url = `https://api.themoviedb.org/3/tv/${id}/keywords?api_key=${this.apiKey}&language=en-US&page=1`;
    return this.httpClient.get(url).pipe(map(response => {
      return response as Key;
    }));
  }
}

