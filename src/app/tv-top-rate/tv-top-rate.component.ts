import { Component, OnInit } from '@angular/core';
import {TvResponse} from '../tv-response';
import {TvService} from '../tv.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-tv-top-rate',
  templateUrl: './tv-top-rate.component.html',
  styleUrls: ['./tv-top-rate.component.css']
})
export class TvTopRateComponent implements OnInit {

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
    this.getToprate();
  }

  getToprate(): void {
    this.tvService.getTopRate(this.page).subscribe(t => this._tv = t);
  }

  pageChanged(event) {
    this.tvService.getTopRate(event).subscribe(x => this._tv = x);
  }

}
