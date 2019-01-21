import {Component, OnInit} from '@angular/core';
import {TvService} from '../tv.service';
import {Tv} from '../tv';
import {TvResponse} from '../tv-response';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-tv-popular',
  templateUrl: './tv-popular.component.html',
  styleUrls: ['./tv-popular.component.css']
})
export class TvPopularComponent implements OnInit {
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
    this.getPopular();
  }

  getPopular(): void {
    this.tvService.getPopular(this.page).subscribe(t => this._tv = t);
  }

  pageChanged(event) {
    this.tvService.getPopular(event).subscribe(x => this._tv = x);
  }

}
