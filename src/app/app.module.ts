import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { TrainerProfileModule } from './trainer-profile/trainer-profile.module';

import { PageNotFoundComponent } from './not-found.component';


@NgModule({
  imports: [
    BrowserModule,
    [MaterialModule.forRoot()],
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
