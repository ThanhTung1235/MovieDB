import { Component, OnInit } from '@angular/core';
import {TvResponse} from '../tv-response';
import {TvService} from '../tv.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-tv-on-tv',
  templateUrl: './tv-on-tv.component.html',
  styleUrls: ['./tv-on-tv.component.css']
})
export class TvOnTVComponent implements OnInit {

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
    this.getTv();
  }

  getTv(): void {
    this.tvService.getOnTv(this.page).subscribe(t => this._tv = t);
  }

  pageChanged(event) {
    this.tvService.getOnTv(event).subscribe(x => this._tv = x);
  }

}
