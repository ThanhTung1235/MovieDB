import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PopularComponent} from '../app/popular/popular.component';
import {MovieDetailsComponent} from '../app/movie-details/movie-details.component';
import {PersonPopularComponent} from './person-popular/person-popular.component';
import {PersonDetailComponent} from './person-detail/person-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'popular', pathMatch: 'full'},
  {path: 'popular', component: PopularComponent},
  {path: 'popular/:page', component: PopularComponent},
  {path: 'detail/:id', component: MovieDetailsComponent},
  {path: 'person', component: PersonPopularComponent},
  {path: 'person/:id', component: PersonDetailComponent}
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
