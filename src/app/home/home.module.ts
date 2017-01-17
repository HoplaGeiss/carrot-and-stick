import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

// services
import { TrainerService } from './components/trainer/trainer.service';

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
    MaterialModule
  ],
  providers: [
    // add the service to our sub-module
    TrainerService
  ],
  exports: [
    // exporting so our root module can access
    TrainerListComponent
  ]
})
export class HomeModule {}