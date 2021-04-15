import { Component, OnInit } from '@angular/core';
import { RootObject } from '../country.model';
import { ServiceCountriesService } from '../service-countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: RootObject;

  constructor(private CountriesService: ServiceCountriesService) { }
  
  ngOnInit(): void { 
    this.listCountries(); 
  } 
 
 
  
  listCountries() {
    this.CountriesService.listCountries()
      .subscribe(resp => this.countries = resp);  
  }




  // listCountries() {
  //   this.CountriesService.listCountries().subscribe(countries => {
  //     this.countries = countries;
  //   }, err => {
  //     console.log('Erro ao lista os países', err);  
  //   })
  // } 
  
}
