import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// services

// containers
import { TrainerListComponent } from './containers/trainer-list/trainer-list.component';

// component
import { TrainerComponent } from './components/trainer/trainer.component';

@NgModule({
  declarations: [
    TrainerListComponent,
    TrainerComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    // add the service to our sub-module
  ],
  exports: [
    // exporting so our root module can access
    HomeModule
  ]
})
export class HomeModule {}