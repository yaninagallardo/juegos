import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouletteComponent } from './components/roulette/roulette.component';

const routes: Routes = [
  { path: '', component: RouletteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
