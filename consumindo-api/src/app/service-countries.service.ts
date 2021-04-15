import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject } from './country.model';

@Injectable({
  providedIn: 'root'
}) 
export class ServiceCountriesService {

  url = 'https://restcountries.eu/rest/v2/alpha/col'; 

  constructor(private http: HttpClient) { } 
  
  
  listCountries() : Observable<RootObject> {
    return this.http.get<RootObject>(this.url);
  } 


  
} 
   