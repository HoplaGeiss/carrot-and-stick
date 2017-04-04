import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RlTagInputModule } from 'angular2-tag-input';

// services
import { TrainerService } from '../shared/trainer.service';
import { SportService } from './shared/sport.service';
import { SearchedTagsService } from './shared/searched-tags.service';

// containers
import { HomeComponent } from './home.component';
import { TrainerListComponent } from './containers/trainer-list/trainer-list.component';
import { SearchInputsComponent } from './containers/search-inputs/search-inputs.component';

// component
import { TrainerComponent } from './components/trainer/trainer.component';

//pipe
import { CriteriaPipe } from './shared/criteria.pipe';

//Routing
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RlTagInputModule,
    HomeRoutingModule
  ],
  declarations: [
    //containers
    TrainerListComponent,
    SearchInputsComponent,
    HomeComponent,
    //components
    TrainerComponent,
    //pipes
    CriteriaPipe,
  ],
  providers: [
    // add the service to our sub-module
    TrainerService,
    SportService,
    SearchedTagsService
  ],
  exports: [
    // exporting so our root module can access
    HomeComponent
  ]
})
export class HomeModule {}
