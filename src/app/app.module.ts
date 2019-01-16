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
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
