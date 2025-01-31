import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  firstName = new FormControl('');
  lastName = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.firstName.valueChanges
      .subscribe((newName) => console.log(newName));
  }

  setFirstName() {
    this.firstName.setValue('Pitt');
    console.log(this.firstName.value);
  }

}
