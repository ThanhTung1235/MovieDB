import {Component, OnInit} from '@angular/core';
import {TvService} from '../tv.service';
import {ActivatedRoute} from '@angular/router';
import {Tv} from '../tv';
import {Cast} from '../cast';
import {Videos} from '../videos';
import {TvResponse} from '../tv-response';
import {KeyWord} from '../key-word';
import {Key} from '../key';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
  tv: Tv;
  _cast: Cast;
  _video: Videos;
  _tvRes: TvResponse;
  _key: Key;
  youtubeUrl = 'https://www.youtube.com/embed/';
  urlImage = 'https://image.tmdb.org/t/p/w1400_and_h450_face';

  constructor(private tvService: TvService,
              private activated: ActivatedRoute) {
  }

  ngOnInit() {
    this.activated.params.subscribe(params => {
      this.getTvDetail(params.id);
      this.getCastShow(params.id);
      this.getVideo(params.id);
      this.getRecommend(params.id);
      this.getkeywords(params.id);
    });
  }

  getTvDetail(id: number): void {
    this.tvService.getTvDetails(id).subscribe(d => this.tv = d);
  }

  getCastShow(id: number): void {
    this.tvService.getCast(id).subscribe(c => this._cast = c);
  }

  getVideo(id: number): void {
    this.tvService.getVideo(id).subscribe(c => this._video = c);
  }

  getRecommend(id: number): void {
    this.tvService.getRecommend(id).subscribe(t => this._tvRes = t);
  }

  getkeywords(id: number): void {
    this.tvService.getKeyword(id).subscribe(t => this._key = t);
  }

}
