import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

// services

// containers
import { TrainerProfileComponent } from './trainer-profile.component';

// component

//pipe

//Routing
import { TrainerProfileRoutingModule } from './trainer-profile-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TrainerProfileRoutingModule
  ],
  declarations: [
    //containers
    TrainerProfileComponent
  ],
  providers: [
    // add the service to our sub-module
  ],
  exports: [
    // exporting so our root module can access
    TrainerProfileComponent
  ]
})
export class TrainerProfileModule {}