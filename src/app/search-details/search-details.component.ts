import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../search.service';
import {Search} from '../search';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {
  search: Search;
  key = '';

  constructor(
    private activated: ActivatedRoute,
    private searchService: SearchService
  ) {
  }

  ngOnInit() {
    this.activated.queryParams.subscribe(params => {
      this.key = params['query'];
    });
  }
}
