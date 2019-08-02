import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoverPageComponent } from './rover-page/rover-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rover/:id', component: RoverPageComponent},

  // Catch All
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
