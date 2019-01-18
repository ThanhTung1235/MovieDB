import {Component, OnInit} from '@angular/core';
import {SearhPerson} from '../search';
import {SearchService} from '../search.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.css']
})
export class PeopleSearchComponent implements OnInit {
  searchPerson: SearhPerson;

  constructor(
    private searchService: SearchService,
    private activated: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activated.queryParams.subscribe(params => {
      const keyword = params['query'];
      this.getPersonSearch(keyword);
    });
  }

  getPersonSearch(keyword: string): void {
    this.searchService.searchPerson(keyword).subscribe(p => this.searchPerson = p);
  }

}
