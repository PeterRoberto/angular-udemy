import { Component, OnInit, Input } from '@angular/core';
import {Client} from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input() name: string; 
  @Input() lastName: string; 
  @Input() age: number; 

  clients: Client[];
  
  constructor() { 
    this.clients = [
      {id: 1, name: "Pitt", age: 33},
      {id: 2, name: "Raul", age: 31},
      {id: 3, name: "Julys", age: 30},
      {id: 4, name: "Vini", age: 32},
    ];
  }

  ngOnInit(): void { 
  }

}
