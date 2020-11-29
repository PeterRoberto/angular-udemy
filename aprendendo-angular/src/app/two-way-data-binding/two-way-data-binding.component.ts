import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  constructor() { }
  name1: string = "";
  name2: string = "";
  client = {
    firstName: "Pitt",
    lastName: "Raiser",
    address:  "Aquela rua 123",    
    age: 33 
  };

  ngOnInit(): void {
  }

}
