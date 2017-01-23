import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerProfileComponent }    from './trainer-profile.component';

const heroesRoutes: Routes = [
  { path: 'trainer/:id',  component: TrainerProfileComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TrainerProfileRoutingModule { }