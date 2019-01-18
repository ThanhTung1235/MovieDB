import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {ActivatedRoute} from '@angular/router';
import {SearchTv} from '../search';

@Component({
  selector: 'app-tv-search',
  templateUrl: './tv-search.component.html',
  styleUrls: ['./tv-search.component.css']
})
export class TvSearchComponent implements OnInit {
  tvSearch: SearchTv;

  constructor(private searchService: SearchService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const keyword = params['query'];
      this.getTvSearch(keyword);
    });
  }

  getTvSearch(keyword: string): void {
    this.searchService.searchTv(keyword).subscribe(t => this.tvSearch = t);
  }

}
