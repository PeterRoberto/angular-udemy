import { Injectable } from '@angular/core';
import { Module1Module } from "../module1/module1.module";

@Injectable({
  providedIn: Module1Module
})
export class Service1 {
  public num: number;  
  constructor() {
      this.num = Math.round(Math.random()*1000);
      console.log('Service 1 - Constructor()');
  } 
}
