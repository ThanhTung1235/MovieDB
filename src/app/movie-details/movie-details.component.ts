import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {MovieDetailsService} from '../movie-details.service';
import {ActivatedRoute, NavigationEnd, Route, Router} from '@angular/router';
import {Movie} from '../movie';
import {MovieDetails} from '../movie-details';
import {Credits} from '../credits';
import {Videos} from '../videos';
import {Recommendations} from '../recommendations';
import {DomSanitizer} from '@angular/platform-browser';
import {Key} from '../key';

@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {


  movie: MovieDetails;
  credits: Credits;
  videos: Videos;
  recommend: Recommendations;
  key: Key;
  youtubeUrl = 'https://www.youtube.com/embed/';
  urlImage = 'https://image.tmdb.org/t/p/w1400_and_h450_face';
  imgCollection = 'https://image.tmdb.org/t/p/w1440_and_h320_bestv2';

  constructor(
    private detailService: MovieDetailsService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {
  }


  ngOnInit() {
    this.route.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.activatedRoute.params.subscribe(routeParams => {
      this.getMovie(routeParams.id);
      this.getCast(routeParams.id);
      this.getTrailer(routeParams.id);
      this.getRecommend_movie(routeParams.id);
      this.getKeyWord(routeParams.id);
    });

  }

  getMovie(id: number): void {
    this.detailService.getMovieDetail(id).subscribe(m => this.movie = m);
  }

  getCast(id: number) {
    this.detailService.getCastMovie(id).subscribe(c => this.credits = c);
  }

  getTrailer(id: number) {
    this.detailService.getVideos(id).subscribe(t => this.videos = t);
  }

  getRecommend_movie(id: number) {
    this.detailService.getRecommend(id).subscribe(a => this.recommend = a);
  }

  getKeyWord(id: number): void {
    this.detailService.getKeyWord(id).subscribe(k => this.key = k);
  }


}
