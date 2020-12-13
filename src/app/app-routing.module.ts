import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { PictionaryComponent } from './components/pictionary/pictionary.component';


const routes: Routes = [
  {
    path: '', component: PictionaryComponent
  },
  {
    path: 'movie', component: MoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
