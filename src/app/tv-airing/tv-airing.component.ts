import { Component, OnInit } from '@angular/core';
import {TvResponse} from '../tv-response';
import {TvService} from '../tv.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-tv-airing',
  templateUrl: './tv-airing.component.html',
  styleUrls: ['./tv-airing.component.css']
})
export class TvAiringComponent implements OnInit {

  _tv: TvResponse;

  constructor(private tvService: TvService,
              private route: Router) {
  }

  page = 1;

  ngOnInit() {
    this.route.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.getAiring();
  }

  getAiring(): void {
    this.tvService.getAiringToday(this.page).subscribe(t => this._tv = t);
  }

  pageChanged(event) {
    this.tvService.getAiringToday(event).subscribe(x => this._tv = x);
  }

}
