import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopularComponent } from './popular/popular.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MovieDetailsComponent, SafePipe} from './movie-details/movie-details.component';
import { ShortcutNavComponent } from './shortcut-nav/shortcut-nav.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonPopularComponent } from './person-popular/person-popular.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchBoxComponent } from './search-box/search-box.component';
import {FormsModule} from '@angular/forms';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { TvSearchComponent } from './tv-search/tv-search.component';
import { PeopleSearchComponent } from './people-search/people-search.component';
import { CollectionSearchComponent } from './collection-search/collection-search.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieTopRateComponent } from './movie-top-rate/movie-top-rate.component';
import { MovieUpcomingComponent } from './movie-upcoming/movie-upcoming.component';
import { MovieNowPlayingComponent } from './movie-now-playing/movie-now-playing.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TvPopularComponent } from './tv-popular/tv-popular.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvOnTVComponent } from './tv-on-tv/tv-on-tv.component';
import { TvAiringComponent } from './tv-airing/tv-airing.component';
import { TvTopRateComponent } from './tv-top-rate/tv-top-rate.component';
import { NavWrapperComponent } from './nav-wrapper/nav-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    PopularComponent,
    HeaderComponent,
    FooterComponent,
    MovieDetailsComponent,
    SafePipe,
    ShortcutNavComponent,
    PersonDetailComponent,
    PersonPopularComponent,
    SearchBoxComponent,
    SearchDetailsComponent,
    TvSearchComponent,
    PeopleSearchComponent,
    CollectionSearchComponent,
    MovieSearchComponent,
    MovieTopRateComponent,
    MovieUpcomingComponent,
    MovieNowPlayingComponent,
    HomePageComponent,
    TvPopularComponent,
    TvDetailsComponent,
    TvOnTVComponent,
    TvAiringComponent,
    TvTopRateComponent,
    NavWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
