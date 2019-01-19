import { Component, OnInit } from '@angular/core';
import {PopularService} from '../popular.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Popular} from '../popular';

@Component({
  selector: 'app-movie-top-rate',
  templateUrl: './movie-top-rate.component.html',
  styleUrls: ['./movie-top-rate.component.css']
})
export class MovieTopRateComponent implements OnInit {

  constructor(private popularService: PopularService,
              private route: Router,
              private activatedRoute: ActivatedRoute) {
  }

  _popular: Popular;
  page = 1;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getTopRateMovie(params.page);
    });
    this.route.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  pageChanged(event) {
    this.popularService.getMovie(event).subscribe(x => this._popular = x);
  }

  getTopRateMovie(page: number): void {
    this.popularService.getToprate(page).subscribe(x => this._popular = x);
  }

}
