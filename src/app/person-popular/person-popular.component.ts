import {Component, OnInit} from '@angular/core';
import {PersonService} from '../person.service';
import {PersonPopular} from '../person-popular';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-person-popular',
  templateUrl: './person-popular.component.html',
  styleUrls: ['./person-popular.component.css']
})
export class PersonPopularComponent implements OnInit {
  persons_popular: PersonPopular;
  page = 1;

  constructor(private personService: PersonService,
              private route: Router) {
  }

  ngOnInit() {
    this.route.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.getPersonPopular();
  }

  getPersonPopular(): void {
    this.personService.getPersonPopular(this.page).subscribe(p => this.persons_popular = p);
  }

  pageChanged(event) {
     this.personService.getPersonPopular(event).subscribe(e => this.persons_popular = e)
  }

}
