import { Component, OnInit } from '@angular/core';
import {PopularService} from '../popular.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Popular} from '../popular';

@Component({
  selector: 'app-movie-now-playing',
  templateUrl: './movie-now-playing.component.html',
  styleUrls: ['./movie-now-playing.component.css']
})
export class MovieNowPlayingComponent implements OnInit {

  constructor(private popularService: PopularService,
              private route: Router,
              private activatedRoute: ActivatedRoute) {
  }

  _popular: Popular;
  page = 1;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getPopularMovie(params.page);
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

  getPopularMovie(page: number): void {
    this.popularService.getNow_playing(page).subscribe(x => this._popular = x);
  }

}
