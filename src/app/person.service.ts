import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PersonPopular} from './person-popular';
import {map} from 'rxjs/operators';
import {Person} from './person';
import {MovieCredit} from './movie-credit';
import {KeyWord} from './key-word';
import {Key} from './key';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) {
  }

  apiKey = localStorage.getItem('apiKey');

  getPersonPopular(page: number): Observable<PersonPopular> {
    const urlPopular = `https://api.themoviedb.org/3/person/popular?api_key=${this.apiKey}&language=en-US&page=${page}`;
    return this.httpClient.get<PersonPopular>(urlPopular).pipe(
      map(person_response => {
        console.log(person_response);
        return person_response as PersonPopular;
      })
    );
  }

  getPersonDetail(id: number): Observable<Person> {
    const urlDetails = `https://api.themoviedb.org/3/person/${id}?api_key=${this.apiKey}`;
    return this.httpClient.get<Person>(urlDetails).pipe(
      map(person_details_rsp => {
        return person_details_rsp as Person;
      }));
  }

  getMovieCredit(id: number): Observable<MovieCredit> {
    const urlCredit = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${this.apiKey}`;
    return this.httpClient.get<MovieCredit>(urlCredit).pipe(
      map(credit_response => {
        return credit_response as MovieCredit;
      })
    );
  }


}
