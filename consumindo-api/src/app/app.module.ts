import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';

import {ServiceCountriesService} from './service-countries.service'

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent, 
  ], 
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, ServiceCountriesService], 
  bootstrap: [AppComponent]
})
export class AppModule { } 
   