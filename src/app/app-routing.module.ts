import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PopularComponent} from '../app/popular/popular.component';
import {MovieDetailsComponent} from '../app/movie-details/movie-details.component';
import {PersonPopularComponent} from './person-popular/person-popular.component';
import {PersonDetailComponent} from './person-detail/person-detail.component';
import {SearchDetailsComponent} from './search-details/search-details.component';
import {CollectionSearchComponent} from './collection-search/collection-search.component';
import {TvSearchComponent} from './tv-search/tv-search.component';
import {PeopleSearchComponent} from './people-search/people-search.component';
import {MovieSearchComponent} from './movie-search/movie-search.component';
import {MovieTopRateComponent} from './movie-top-rate/movie-top-rate.component';
import {MovieUpcomingComponent} from './movie-upcoming/movie-upcoming.component';
import {MovieNowPlayingComponent} from './movie-now-playing/movie-now-playing.component';
import {HomePageComponent} from './home-page/home-page.component';
import {TvPopularComponent} from './tv-popular/tv-popular.component';
import {TvDetailsComponent} from './tv-details/tv-details.component';
import {TvOnTVComponent} from './tv-on-tv/tv-on-tv.component';
import {TvAiringComponent} from './tv-airing/tv-airing.component';
import {TvTopRateComponent} from './tv-top-rate/tv-top-rate.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'popular', component: PopularComponent},
  {path: 'top-rated', component: MovieTopRateComponent},
  {path: 'upcoming', component: MovieUpcomingComponent},
  {path: 'now-playing', component: MovieNowPlayingComponent},
  {path: 'popular/:page', component: PopularComponent},
  {path: 'detail/:id', component: MovieDetailsComponent},
  {path: 'person', component: PersonPopularComponent},
  {path: 'person/:id', component: PersonDetailComponent},
  {
    path: 'search', component: SearchDetailsComponent, children: [
      {path: '', redirectTo: 'movie', pathMatch: 'full'},
      {path: 'movie', component: MovieSearchComponent},
      {path: 'collection', component: CollectionSearchComponent},
      {path: 'tv', component: TvSearchComponent},
      {path: 'people', component: PeopleSearchComponent}
    ]
  },
  {path: 'tv/popular', component: TvPopularComponent},
  {path: 'tv/on-tv', component: TvOnTVComponent},
  {path: 'tv/airing-today', component: TvAiringComponent},
  {path: 'tv/top', component: TvTopRateComponent},
  {path: 'tv/:id', component: TvDetailsComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

