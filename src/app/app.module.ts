import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { HttpModule }    from '@angular/http';
import 'hammerjs';
import './rxjs-extensions';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './shared/in-memory-data.service';

import { HomeModule } from './home/home.module';
import { TrainerProfileModule } from './trainer-profile/trainer-profile.module';

import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    [MaterialModule.forRoot()],
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HomeModule,
    TrainerProfileModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
