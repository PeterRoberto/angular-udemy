import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-string-interpolation',
  templateUrl: './databinding-string-interpolation.component.html',
  styleUrls: ['./databinding-string-interpolation.component.css']
})
export class DatabindingStringInterpolationComponent implements OnInit {
  firstname = "Pitt";
  person = {
    firstname: "Pitt",
    lastname: "Raiser",
    age: 33
  }

  constructor() { }

  ngOnInit(): void {
  }

}
