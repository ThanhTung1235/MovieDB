import {Component, OnInit} from '@angular/core';
import {PersonService} from '../person.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Person} from '../person';
import {MovieCredit} from '../movie-credit';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  person: Person;
  credit: MovieCredit;
  gender = {
    1: 'Female',
    2: 'Male',
    0: '-'
  };

  constructor(
    private personService: PersonService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {
  }


  ngOnInit() {
    this.route.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.activatedRoute.params.subscribe(routeParams => {
      this.getPersonDetail(routeParams.id);
      this.getCredit(routeParams.id);
    });
  }

  getPersonDetail(id: number): void {
    this.personService.getPersonDetail(id).subscribe(p => this.person = p);
  }

  getCredit(id: number): void {
    this.personService.getMovieCredit(id).subscribe(c => this.credit = c);
  }
}
