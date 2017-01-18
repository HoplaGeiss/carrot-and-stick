import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import {RlTagInputModule} from 'angular2-tag-input';

// services
import { TrainerService } from './shared/trainer.service';
import { SportService } from './shared/sport.service';

// containers
import { TrainerListComponent } from './containers/trainer-list/trainer-list.component';
import { SearchInputsComponent } from './containers/search-inputs/search-inputs.component';

// component
import { TrainerComponent } from './components/trainer/trainer.component';

//pipe
import { LocationPipe } from './containers/trainer-list/location.pipe'

@NgModule({
  declarations: [
    //containers
    TrainerListComponent,
    SearchInputsComponent,
    //components
    TrainerComponent,
    //pipes
    LocationPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RlTagInputModule
  ],
  providers: [
    // add the service to our sub-module
    TrainerService,
    SportService
  ],
  exports: [
    // exporting so our root module can access
    TrainerListComponent,
    SearchInputsComponent
  ]
})
export class HomeModule {}