import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PictionaryComponent } from './components/pictionary/pictionary.component';


const routes: Routes = [
  { path: '', component: PictionaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
